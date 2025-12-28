
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertCircle, Info } from 'lucide-react';
import { getLegalAssistantResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatAssistant: React.FC = () => {
  // Fix: Removed unnecessary key selection logic for standard text models as per strict guidelines
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Dobar dan! Ja sam virtuelni asistent advokata Aleksandra Rajtarova. Tu sam da vam pružim brze, preliminarne informacije dok čekate na razgovor sa advokatom. Kako vam mogu pomoći oko vašeg slučaja?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getLegalAssistantResponse(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Nažalost, došlo je do greške u komunikaciji sa asistentom. Molimo vas da popunite kontakt formu ispod kako bi vas advokat Rajtarov direktno kontaktirao." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="asistent" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-600/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">
            <Info className="w-4 h-4" /> Brza Podrška
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold italic text-white">Pitaj Asistenta</h3>
          <p className="mt-4 text-slate-400">Preliminarne informacije u realnom vremenu dok čekate na poziv advokata Rajtarova.</p>
        </div>

        <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 relative">
          <div className="h-[450px] overflow-y-auto p-6 space-y-4 scroll-smooth" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-inner ${msg.role === 'user' ? 'bg-amber-600' : 'bg-slate-700 border border-slate-600'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5 text-amber-500" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-amber-600 text-white rounded-tr-none' : 'bg-slate-700 text-slate-200 rounded-tl-none border border-slate-600'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600">
                    <Bot className="w-5 h-5 animate-pulse text-amber-500" />
                  </div>
                  <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none border border-slate-600">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-850 border-t border-slate-700">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Postavite pitanje o vašem slučaju..."
                className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white p-3 rounded-lg transition-colors shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-3 flex items-start gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" />
              Asistent pruža preliminarnu pomoć. Zvanični pravni savet daje isključivo Aleksandar Rajtarov nakon uvida u predmet.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatAssistant;
