import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const address = "Avijatičarska 21, 21000 Novi Sad";
  // Standardni Google Maps embed za Novi Sad, Avijatičarska 21
  const standardMapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.384661445763!2d19.80584537667786!3d45.26021897107127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1192e272a275%3A0x676b5c5e8848f06!2sAvijati%C4%8Darska%2021%2C%20Novi%20Sad!5e0!3m2!1ssr!2srs!4v1710000000000!5m2!1ssr!2srs";

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-amber-600 text-sm font-bold uppercase tracking-[0.3em] mb-4">Kontakt Centar</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#121a2b] font-bold mb-8 italic">Zakažite direktne konsultacije</h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[#121a2b] rounded-sm text-amber-500 shadow-xl group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#121a2b] uppercase tracking-widest text-xs mb-1">Direktan Telefon</h4>
                  <p className="text-2xl font-serif text-[#121a2b] hover:text-amber-600 transition-colors">
                    <a href="tel:+381644939453">+381 64 493 9453</a>
                  </p>
                  <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest">Dostupan za hitne pozive i poruke</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[#121a2b] rounded-sm text-amber-500 shadow-xl group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#121a2b] uppercase tracking-widest text-xs mb-1">E-mail Korespondencija</h4>
                  <p className="text-lg font-medium text-[#121a2b] hover:text-amber-600 transition-colors">
                    <a href="mailto:rajtarovaleksandar44@gmail.com">rajtarovaleksandar44@gmail.com</a>
                  </p>
                  <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest">Odgovor u roku od 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[#121a2b] rounded-sm text-amber-500 shadow-xl group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#121a2b] uppercase tracking-widest text-xs mb-1">Lokacija Kancelarije</h4>
                  <p className="text-lg text-[#121a2b]">{address}</p>
                  <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest font-bold text-amber-600">Novi Sad, Srbija</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 border-l-4 border-amber-500 bg-slate-50 italic text-slate-600">
              "Pravovremena pravna pomoć je ključ svakog uspeha. Ne čekajte da problem postane nerešiv. Možete nas kontaktirati direktno putem telefona ili e-maila."
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-[#121a2b] p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -rotate-45 translate-x-16 -translate-y-16"></div>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">Vaše Ime</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-amber-500 outline-none transition-all placeholder:text-white/20" placeholder="Puno ime i prezime" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">Kontakt Telefon</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-amber-500 outline-none transition-all placeholder:text-white/20" placeholder="+381 6X XXX XXXX" required />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">Oblast slučaja</label>
                  <select className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white/70 focus:border-amber-500 outline-none transition-all cursor-pointer">
                    <option className="bg-[#121a2b]">Građansko pravo</option>
                    <option className="bg-[#121a2b]">Privredno pravo</option>
                    <option className="bg-[#121a2b]">Krivično pravo</option>
                    <option className="bg-[#121a2b]">Nepokretnosti</option>
                    <option className="bg-[#121a2b]">Ostalo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">Opis slučaja</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-amber-500 outline-none transition-all placeholder:text-white/20" placeholder="Ukratko objasnite vašu situaciju..."></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-600 text-[#121a2b] font-black py-5 rounded-sm hover:bg-amber-500 transition-all uppercase tracking-[0.2em] shadow-lg">
                  Pošaljite poverljivi upit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Integration Section */}
        <div className="w-full h-[450px] rounded-sm overflow-hidden shadow-2xl border border-slate-200 relative group">
          <iframe 
            src={standardMapEmbed}
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: scrolled ? 'grayscale(0)' : 'grayscale(0.3) contrast(1.1)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokacija Advokatske Kancelarije Rajtarov"
            className="transition-all duration-700 group-hover:grayscale-0"
          ></iframe>
          <div className="absolute bottom-6 left-6 bg-[#121a2b] p-6 shadow-2xl border-l-4 border-amber-600 hidden md:block">
            <h4 className="text-white font-serif font-bold text-xl mb-1">Pronađite nas lakše</h4>
            <p className="text-white/60 text-xs uppercase tracking-widest mb-4">{address}</p>
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-[#121a2b] font-black px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest transition-all"
            >
              Uputstva za navigaciju <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;