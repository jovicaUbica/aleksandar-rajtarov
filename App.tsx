import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ChatAssistant from './components/ChatAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cases from './components/Cases';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Expertise />
        <Cases />
        <Process />
        <Testimonials />
        <ChatAssistant />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;