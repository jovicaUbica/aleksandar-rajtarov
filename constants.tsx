import React from 'react';
import { 
  Scale, Users, Briefcase, Gavel, ShieldCheck, 
  FileText, MessageSquare, Search, Award, CheckCircle, 
  Home, Landmark, Zap, CreditCard, ShieldAlert, Gavel as GavelIcon
} from 'lucide-react';
import { PracticeArea, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Početna', href: '#pocetna' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Uspesi', href: '#uspesi' },
  { label: 'Asistent', href: '#asistent' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil',
    title: 'Građansko pravo',
    description: 'Sastavljanje svih vrsta ugovora, zastupanje u parničnim postupcima i zaštita imovinskih prava klijenata.',
    icon: <Scale className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 'corporate',
    title: 'Privredno pravo',
    description: 'Osnivanje firmi, izrada statusne dokumentacije, pravni due diligence i zastupanje pred privrednim sudovima.',
    icon: <Landmark className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 'real-estate',
    title: 'Nepokretnosti i Izgradnja',
    description: 'Pravna podrška u kupoprodaji nepokretnosti, legalizacija objekata i regulisanje odnosa u Katastru nepokretnosti.',
    icon: <Home className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 'criminal',
    title: 'Krivično i Prekršajno',
    description: 'Stručna odbrana u krivičnim postupcima, privredni prestupi i zastupanje u saobraćajnim prekršajima.',
    icon: <Gavel className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 'labor',
    title: 'Radno pravo',
    description: 'Rešavanje sporova povodom otkaza, neisplaćenih zarada, mobinga i izrada pravilnika o radu za poslodavce.',
    icon: <FileText className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 'family',
    title: 'Porodično i Nasledno',
    description: 'Razvodi braka, poveravanje dece, deoba bračne tekovine, ostavinski postupci i sastavljanje testamenta.',
    icon: <Users className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 'it-law',
    title: 'IT Pravo i GDPR',
    description: 'Zaštita podataka o ličnosti, autorska prava u softverskoj industriji i izrada Terms & Conditions dokumenata.',
    icon: <Zap className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 'damages',
    title: 'Naknada štete',
    description: 'Naplata materijalne i nematerijalne štete nastale u saobraćajnim nezgodama ili usled povreda na radu.',
    icon: <ShieldAlert className="w-8 h-8 text-amber-600" />,
  },
];

export const NOTABLE_CASES = [
  {
    title: "Privredni spor od 1.2M EUR",
    category: "Privredno Pravo",
    outcome: "Presuda u korist klijenta",
    description: "Uspešna odbrana domaće IT kompanije protiv multinacionalne korporacije u sporu oko autorskih prava."
  },
  {
    title: "Oslobađajuća presuda (Privredni kriminal)",
    category: "Krivično Pravo",
    outcome: "Oslobađajuća presuda",
    description: "Dokazana nevinost klijenta u kompleksnom procesu vezanom za navodnu utaju poreza i pranje novca."
  },
  {
    title: "Povraćaj nacionalizovane imovine",
    category: "Imovinsko Pravo",
    outcome: "Vraćanje poseda",
    description: "Uspešno okončan višedecenijski proces restitucije objekta u centru Beograda vrednog preko 800.000 EUR."
  }
];

export const FAQS = [
  {
    question: "Koliko koštaju inicijalne konsultacije?",
    answer: "Cena prve konsultacije zavisi od kompleksnosti predmeta. Za klijente koji nas angažuju, cena konsultacija se uračunava u ukupne troškove postupka."
  },
  {
    question: "Da li garantujete uspeh u sporu?",
    answer: "Prema Kodeksu advokatske etike, nijedan advokat ne sme da garantuje ishod spora. Ipak, garantujemo maksimalnu posvećenost i korišćenje svih pravnih lekova."
  },
  {
    question: "Koliko dugo obično traju sudski postupci?",
    answer: "Prosečno trajanje zavisi od suda i vrste spora. Naš cilj je uvek medijacija i vansudsko poravnanje kako bismo uštedeli vreme i resurse klijenta."
  }
];

export const WORK_PROCESS = [
  {
    title: 'Inicijalne Konsultacije',
    description: 'Prvi korak je detaljan razgovor gde analiziramo vaš pravni problem i definišemo ciljeve.',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: 'Analiza i Strategija',
    description: 'Proučavamo sudsku praksu i zakone kako bismo kreirali najefikasniju strategiju za vaš slučaj.',
    icon: <Search className="w-6 h-6" />
  },
  {
    title: 'Preduzimanje Radnji',
    description: 'Podnošenje tužbi, odgovora na tužbe, pregovaranje ili zastupanje pred državnim organima.',
    icon: <Award className="w-6 h-6" />
  },
  {
    title: 'Uspešno Rešenje',
    description: 'Finalizacija postupka uz maksimalnu zaštitu vaših interesa i postizanje željenog rezultata.',
    icon: <CheckCircle className="w-6 h-6" />
  }
];

export const TESTIMONIALS = [
  {
    name: 'Nikola Jovanović',
    role: 'Vlasnik kompanije TechSolutions',
    text: 'Advokat Rajtarov je pokazao izuzetnu stručnost u rešavanju našeg kompleksnog privrednog spora. Preporučujem ga svakom ozbiljnom biznisu.'
  },
  {
    name: 'Marija Lukić',
    role: 'Klijent (Građansko pravo)',
    text: 'Profesionalnost i ljudski pristup su ono što izdvaja ovu kancelariju. Dobila sam spor koji je trajao godinama zahvaljujući Aleksandrovoj upornosti.'
  },
  {
    name: 'Dragan Simić',
    role: 'Klijent (Porodično pravo)',
    text: 'U veoma teškom životnom periodu, imao sam punu pravnu i moralnu podršku. Diskrecija i efikasnost su na najvišem nivou.'
  }
];