import React from 'react';
import { 
  Wrench, 
  Droplet, 
  Layers, 
  Cpu, 
  Calendar, 
  Sun, 
  Snowflake, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Globe2
} from 'lucide-react';

// NYELVI LOKALIZÁCIÓS STRUKTÚRA (Bármikor bővíthető EN és FR nyelvekkel)
const CONTENT = {
  hu: {
    nav: {
      brand: "Magiline Szerviz",
      badge: "Független Specialisták",
      links: ["10 Év Tapasztalat", "Szezonalitás", "Technológia", "B2B Vízió", "Kapcsolat"],
      cta: "Szakértői Ajánlatkérés"
    },
    hero: {
      tag: "KÖZEL 10 ÉVES SPECIALIZÁLT MÚLT",
      title: "Prémium Magiline Medence Karbantartás és Szerviz",
      subtitle: "Nem csupán üzemeltetjük, hanem tökéletesen fenntartjuk. A francia prémium medencetechnológia hazai szakértői vagyunk a szerkezeti javítástól az iMAGI-X okosvezérlésig.",
      ctaPrimary: "Tekintse meg referenciáinkat",
      ctaSecondary: "Kapcsolatfelvétel"
    },
    stats: [
      { value: "9+", label: "Év Magiline tapasztalat" },
      { value: "150+", label: "Kezelt medence itthon" },
      { value: "500+", label: "Sikeres nyitás és téli zárás" },
      { value: "100%", label: "Márkaspecifikus szaktudás" }
    ],
    seasons: {
      title: "4 Évszakos Teljes Életciklus Gondozás",
      subtitle: "A Magiline medencék speciális odafigyelést igényelnek. Ismerjük minden csavarjukat az őszi fagyoktól a nyári kánikuláig.",
      items: [
        {
          icon: Sun,
          title: "Tavaszi Nyitás & Beüzemelés",
          desc: "Rendszer teljes újraindítása, professzionális vegyszeres vízkezelés indítása, szűrődiagnosztika és az iMAGI-X automatizáció finomhangolása a szezonra."
        },
        {
          icon: Droplet,
          title: "Nyári Karbantartás & Finomhangolás",
          desc: "Folyamatos vízminőség optimalizálás, szivárgásvizsgálat, liner ellenőrzés, távvezérlési szenzorok (pH/ORP) kalibrálása a gondtalan használatért."
        },
        {
          icon: Snowflake,
          title: "Professzionális Téli Zárás",
          desc: "Fagyvédelem felsőfokon. A csőrendszer teljes víztelenítése, a speciális Magiline téli takarórendszerek telepítése az aktív szűrőblokk védelmében."
        },
        {
          icon: Wrench,
          title: "Hardveres Javítás & Modernizáció",
          desc: "FX és NFX szabadalmaztatott szűrőszivattyúk felújítása, alkatrészcsere, valamint a régebbi modellek átalakítása modern, okos iMAGI-X ökoszisztémává."
        }
      ]
    },
    tech: {
      title: "Márkaspecifikus Technológiai Kompetencia",
      subtitle: "Franciaország piacvezető szabadalmait javítjuk és konfiguráljuk napi szinten.",
      items: [
        {
          icon: Layers,
          title: "NFX Szabadalmaztatott Szűrőblokkok",
          desc: "A patronos szűrőrendszer mélyreható ismerete. 3-szor gyorsabb szűrési ciklusok beállítása minimális vízveszteség mellett."
        },
        {
          icon: Cpu,
          title: "iMAGI-X Okos Automatizáció",
          desc: "Komplett digitális vezérlés kalibrálása. Hőmérséklet, vízszint, világítás és vegyszeradagolás távoli elérésének professzionális kiépítése."
        },
        {
          icon: ShieldCheck,
          title: "Moduláris Zsaluzatos Betonszerkezet",
          desc: "A Magiline egyedi panelrendszerének és vasalt betonszerkezetének statikai ismerete, bélésfóliák (liner) szakszerű javítása."
        }
      ]
    },
    b2b: {
      title: "B2B Jövőkép: Úton a Hivatalos Disztribúció Felé",
      desc: "Célunk, hogy a régió legelismertebb Magiline szervizpartnereként szintet lépjünk. Hivatalos, gyári márkaképviseletként és disztribútorként kívánjuk biztosítani a francia anyavállalat számára a legmagasabb szintű hazai értékesítést és támogatást.",
      badge: "Hivatalos Disztribútori Jelölt"
    },
    contact: {
      title: "Kérjen Szakértői Segítséget Medencéjéhez",
      subtitle: "Vegye fel velünk a kapcsolatot, legyen szó sürgős javításról vagy szezonális munkákról.",
      fields: {
        name: "Az Ön neve",
        email: "E-mail címe",
        phone: "Telefonszáma",
        type: "Medence típusa / kora",
        service: "Kért szolgáltatás",
        services: ["Tavaszi nyitás", "Téli zárás", "Karbantartás", "iMAGI-X / Szivattyú javítás", "Egyéb modernizáció"],
        msg: "Üzenet leírása",
        submit: "Küldés a Magiline Specialistának"
      }
    }
  }
};

export default function MagilineExpertWebsite() {
  // A nyelvi verzió itt később dinamikussá tehető (pl. useState-tel vagy Next-Intl-lel)
  const t = CONTENT.hu; 

  return (
    <div className="min-h-screen bg-[#EEF4F8] text-[#0B2545] font-sans antialiased">
      
      {/* 1. HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-[#8DA9C4]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#0B2545] uppercase flex items-center gap-2">
              <Droplet className="text-[#134074] animate-pulse" /> {t.nav.brand}
            </span>
            <span className="text-xs text-[#134074] font-medium tracking-wide">{t.nav.badge}</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-semibold">
            {t.nav.links.map((link, idx) => (
              <a key={idx} href={`#section-${idx}`} className="text-[#134074] hover:text-[#0B2545] transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* NYELVVÁLASZTÓ INDIKÁTOR (A jövőbeli többnyelvűség előkészítése) */}
            <div className="flex items-center gap-1 text-xs border border-[#8DA9C4]/40 px-2 py-1 rounded bg-white font-medium text-[#134074]">
              <Globe2 size={14} />
              <span className="font-bold underline text-[#0B2545]">HU</span>
              <span className="opacity-40">|</span>
              <span className="opacity-50 hover:opacity-100 cursor-pointer">EN</span>
              <span className="opacity-40">|</span>
              <span className="opacity-50 hover:opacity-100 cursor-pointer">FR</span>
            </div>
            <a href="#contact" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-[#0B2545] hover:bg-[#134074] rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md">
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#EEF4F8] to-[#EEF4F8] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider text-white bg-[#134074]">
                <Award size={14} /> {t.hero.tag}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2545] leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg text-[#134074]/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a href="#section-0" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-[#134074] hover:bg-[#0B2545] rounded-xl transition-all shadow-lg group">
                  {t.hero.ctaPrimary}
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-[#0B2545] bg-white border-2 border-[#8DA9C4]/40 hover:bg-[#EEF4F8] rounded-xl transition-all">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
            
            {/* Vizuális placeholder/Képkonténer */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#134074]/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-[#0B2545] to-[#134074] rounded-2xl shadow-2xl flex flex-col justify-between p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Droplet size={200} />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-16 bg-white/40 rounded-full"></div>
                  <p className="text-xs uppercase tracking-widest text-white/70">Premium Service Record</p>
                  <p className="text-xl font-bold font-mono">EST. 2017 / HUNGARY</p>
                </div>
                <div className="border-t border-white/20 pt-6 space-y-2">
                  <p className="text-xs text-white/80 italic">"A technológia francia, a szakértelem hazai."</p>
                  <div className="flex gap-1 text-yellow-400">{'★'.repeat(5)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section id="section-0" className="bg-white border-y border-[#8DA9C4]/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
