import time
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class GitSyncHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        if event.is_directory or '.git' in event.src_path:
            return
        
        # Wait a bit to let file operations settle
        time.sleep(1)
        
        print(f"Detektovana promena: {event.src_path}")
        self.sync_git()

    def sync_git(self):
        try:
            subprocess.run(["git", "add", "."], check=True)
            # Check if there are changes to commit
            status = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True)
            if not status.stdout.strip():
                print("Nema promena za commit.")
                return

            timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
            subprocess.run(["git", "commit", "-m", f"Auto-update: {timestamp}"], check=True)
            
            # Check if remote exists before pushing
            remotes = subprocess.run(["git", "remote"], capture_output=True, text=True)
            if "origin" in remotes.stdout:
                print("Saljem na GitHub...")
                subprocess.run(["git", "push", "origin", "main"], check=True)
                print("Uspesno poslato!")
            else:
                print("Nije podesen remote 'origin'. Preskacem push.")
                
        except subprocess.CalledProcessError as e:
            print(f"Greska prilikom git operacije: {e}")

if __name__ == "__main__":
    path = "."
    event_handler = GitSyncHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    print(f"Pratim promene u folderu: {path}")
    print("Pritisnite Ctrl+C za prekid.")
    try:
        while True:
            time.sleep(5)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
