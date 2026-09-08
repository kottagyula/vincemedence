"use client";

import React from 'react';
import { 
  Wrench, 
  Droplet, 
  Layers, 
  Cpu, 
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
          id: 1,
          icon: Sun,
          title: "Tavaszi Nyitás & Beüzemelés",
          desc: "Rendszer teljes újraindítása, professzionális vegyszeres vízkezelés indítása, szűrődiagnosztika és az iMAGI-X automatizáció finomhangolása a szezonra."
        },
        {
          id: 2,
          icon: Droplet,
          title: "Nyári Karbantartás & Finomhangolás",
          desc: "Folyamatos vízminőség optimalizálás, szivárgásvizsgálat, liner ellenőrzés, távvezérlési szenzorok (pH/ORP) kalibrálása a gondtalan használatért."
        },
        {
          id: 3,
          icon: Snowflake,
          title: "Professzionális Téli Zárás",
          desc: "Fagyvédelem felsőfokon. A csőrendszer teljes víztelenítése, a speciális Magiline téli takarórendszerek telepítése az aktív szűrőblokk védelmében."
        },
        {
          id: 4,
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
          id: 1,
          icon: Layers,
          title: "NFX Szabadalmaztatott Szűrőblokkok",
          desc: "A patronos szűrőrendszer mélyreható ismerete. 3-szor gyorsabb szűrési ciklusok beállítása minimális vízveszteség mellett."
        },
        {
          id: 2,
          icon: Cpu,
          title: "iMAGI-X Okos Automatizáció",
          desc: "Komplett digitális vezérlés kalibrálása. Hőmérséklet, vízszint, világítás és vegyszeradagolás távoli elérésének professzionális kiépítése."
        },
        {
          id: 3,
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
  const t = CONTENT.hu; 

  return (
    <div style={{ backgroundColor: '#EEF4F8', color: '#0B2545', fontFamily: 'sans-serif', minHeight: 'screen' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: 'white', padding: '20px', borderBottom: '1px solid #8DA9C4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
          <div>
            <strong style={{ fontSize: '20px' }}>{t.nav.brand}</strong>
            <div style={{ fontSize: '12px', color: '#134074' }}>{t.nav.badge}</div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>HU</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <span style={{ backgroundColor: '#134074', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{t.hero.tag}</span>
        <h1 style={{ fontSize: '40px', marginTop: '20px', marginBottom: '20px' }}>{t.hero.title}</h1>
        <p style={{ color: '#134074', fontSize: '18px', lineHeight: '1.6' }}>{t.hero.subtitle}</p>
        <div style={{ marginTop: '30px' }}>
          <a href="#contact" style={{ backgroundColor: '#0B2545', color: 'white', padding: '15px 30px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>{t.hero.ctaSecondary}</a>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'white', padding: '40px 20px', borderY: '1px solid #8DA9C4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          {t.stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: '#134074' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SEASONS */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px' }}>{t.seasons.title}</h2>
        <p style={{ textAlign: 'center', color: '#134074', marginBottom: '40px' }}>{t.seasons.subtitle}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {t.seasons.items.map((item) => (
            <div key={item.id} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', width: '250px', border: '1px solid #8DA9C4' }}>
              <h3>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#134074' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* B2B VISION */}
      <section style={{ backgroundColor: '#0B2545', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ border: '1px solid text-yellow-400', color: '#facc15', padding: '5px 10px', borderRadius: '20px', fontSize: '12px' }}>{t.b2b.badge}</span>
          <h2 style={{ fontSize: '32px', marginTop: '20px' }}>{t.b2b.title}</h2>
          <p style={{ color: '#8DA9C4', marginTop: '20px', lineHeight: '1.6' }}>{t.b2b.desc}</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: '600px', margin: '40px auto', backgroundColor: 'white', padding: '40px', borderRadius: '20px', border: '1px solid #8DA9C4' }}>
        <h2 style={{ text: 'center' }}>{t.contact.title}</h2>
        <p style={{ color: '#134074', fontSize: '14px' }}>{t.contact.subtitle}</p>
        <div style={{ marginTop: '20px', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
          <div>📞 <strong>Telefon:</strong> +36 30 123 4567</div>
          <div>✉️ <strong>Email:</strong> info@vincemedence.hu</div>
          <div>📍 <strong>Helyszín:</strong> Budapest & Országos lefedettség</div>
        </div>
      </section>

    </div>
  );
}
