"use client";

import React from 'react';

export default function MagilineExpertWebsite() {
  return (
    <div style={{ backgroundColor: '#EEF4F8', color: '#0B2545', fontFamily: 'sans-serif', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* 1. HEADER & NAVIGATION */}
      <header style={{ backgroundColor: 'white', padding: '20px', borderBottom: '1px solid #8DA9C4', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong style={{ fontSize: '22px', trackingTight: 'tight' }}>💧 Magiline Szerviz</strong>
            <div style={{ fontSize: '12px', color: '#134074', fontWeight: 'bold' }}>Független Specialisták</div>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', fontSize: '14px', border: '1px solid #8DA9C4', padding: '3px 8px', borderRadius: '5px' }}>HU</span>
            <a href="#contact" style={{ backgroundColor: '#0B2545', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>Ajánlatkérés</a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <span style={{ backgroundColor: '#134074', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', trackingWider: 'wider' }}>
          🏆 KÖZEL 10 ÉVES SPECIALIZÁLT MÚLT
        </span>
        <h1 style={{ fontSize: '42px', marginTop: '25px', marginBottom: '25px', fontWeight: '800', lineHeight: '1.2' }}>
          Prémium Magiline Medence Karbantartás és Szerviz
        </h1>
        <p style={{ color: '#134074', fontSize: '19px', lineHeight: '1.6', margin: '0 auto 30px auto' }}>
          Időtálló biztonság és tiszta élvezet. A francia prémium medencetechnológia hazai szakértői vagyunk a szerkezeti javításoktól az iMAGI-X okosvezérlés konfigurálásáig.
        </p>
        <div>
          <a href="#contact" style={{ backgroundColor: '#134074', color: 'white', padding: '15px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            Kapcsolatfelvétel és Szerviz →
          </a>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section style={{ backgroundColor: 'white', padding: '40px 20px', borderTop: '1px solid #8DA9C4', borderBottom: '1px solid #8DA9C4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px' }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: '38px', fontWeight: 'bold' }}>9+</div><div style={{ fontSize: '14px', color: '#134074' }}>Év Magiline tapasztalat</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: '38px', fontWeight: 'bold' }}>150+</div><div style={{ fontSize: '14px', color: '#134074' }}>Kezelt medence itthon</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: '38px', fontWeight: 'bold' }}>500+</div><div style={{ fontSize: '14px', color: '#134074' }}>Sikeres nyitás és zárás</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: '38px', fontWeight: 'bold' }}>100%</div><div style={{ fontSize: '14px', color: '#134074' }}>Márkaspecifikus tudás</div></div>
        </div>
      </section>

      {/* 4. FOUR SEASONS CARE */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '34px', fontWeight: 'bold', marginBottom: '10px' }}>4 Évszakos Teljes Életciklus Gondozás</h2>
        <p style={{ textAlign: 'center', color: '#134074', marginBottom: '50px', fontSize: '16px' }}>A Magiline medencék speciális odafigyelést igényelnek. Ismerjük minden alkatrészüket a téli fagyoktól a nyári kánikuláig.</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', width: '260px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid rgba(141,169,196,0.2)' }}>
            <div style={{ fontSize: '28px', marginBottom: '15px' }}>☀️</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Tavaszi Nyitás</h3>
            <p style={{ fontSize: '14px', color: '#134074', lineHeight: '1.5', margin: 0 }}>Rendszer teljes újraindítása, professzionális vegyszeres vízkezelés indítása, szűrődiagnosztika és az iMAGI-X automatizáció syncing.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', width: '260px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid rgba(141,169,196,0.2)' }}>
            <div style={{ fontSize: '28px', marginBottom: '15px' }}>💧</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Nyári Karbantartás</h3>
            <p style={{ fontSize: '14px', color: '#134074', lineHeight: '1.5', margin: 0 }}>Folyamatos vízminőség optimalizálás, szivárgásvizsgálat, bélésfólia (liner) ellenőrzés, távvezérlési szenzorok (pH/ORP) kalibrálása.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', width: '260px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid rgba(141,169,196,0.2)' }}>
            <div style={{ fontSize: '28px', marginBottom: '15px' }}>❄️</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Professzionális Téli Zárás</h3>
            <p style={{ fontSize: '14px', color: '#134074', lineHeight: '1.5', margin: 0 }}>Fagyvédelem felsőfokon. A csőrendszer teljes víztelenítése, a speciális Magiline téli takarórendszerek precíz telepítése.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', width: '260px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid rgba(141,169,196,0.2)' }}>
            <div style={{ fontSize: '28px', marginBottom: '15px' }}>🔧</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Hardveres Javítás</h3>
            <p style={{ fontSize: '14px', color: '#134074', lineHeight: '1.5', margin: 0 }}>FX és NFX szabadalmaztatott szűrőszivattyúk felújítása, alkatrészcsere, valamint a régebbi modellek okosítása.</p>
          </div>
        </div>
      </section>

      {/* 5. B2B VISION */}
      <section style={{ backgroundColor: '#0B2545', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ border: '1px solid #facc15', color: '#facc15', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
            ⏱️ HIVATALOS DISZTRÍBÚTORI JELÖLT
          </span>
          <h2 style={{ fontSize: '36px', marginTop: '25px', fontWeight: 'bold' }}>B2B Jövőkép: Úton a Hivatalos Disztribúció Felé</h2>
          <p style={{ color: '#8DA9C4', marginTop: '20px', lineHeight: '1.6', fontSize: '17px', fontWeight: '300' }}>
            Célunk, hogy a régió legelismertebb Magiline szervizpartnereként szintet lépjünk. Hivatalos, gyári márkaképviseletként és disztribútorként kívánjuk biztosítani a francia anyavállalat számára a legmagasabb szintű hazai értékesítést és támogatást.
          </p>
        </div>
      </section>

      {/* 6. CONTACT FORM */}
      <section id="contact" style={{ maxWidth: '650px', margin: '60px auto', backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid rgba(141,169,196,0.2)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 10px 0', textAllign: 'center' }}>Kapcsolatfelvétel Szervizhez</h2>
        <p style={{ color: '#134074', fontSize: '15px', marginBottom: '30px' }}>Vegye fel velünk a kapcsolatot, legyen szó sürgős hibaelhárításról vagy szezonális munkákról.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '16px', fontWeight: '600', color: '#0B2545', backgroundColor: '#EEF4F8', padding: '25px', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>📞 <span><strong>Telefon:</strong> <a href="tel:+36703721008" style={{ color: '#0B2545', textDecoration: 'none' }}>+36 70 372 1008</a></span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✉️ <span><strong>E-mail:</strong> <a href="mailto:kottagyula@gmail.com" style={{ color: '#0B2545', textDecoration: 'none' }}>kottagyula@gmail.com</a></span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>📍 <span><strong>Lefedettség:</strong> Budapest & Országos szervizhálózat</span></div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer style={{ backgroundColor: '#0B2545', color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '30px 20px', fontSize: '13px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Vince Medence. Minden jog fenntartva.</p>
        <p style={{ margin: '5px 0 0 0', italic: 'true', color: 'rgba(255,255,255,0.3)' }}>Független szakértői és szerviz szolgáltatás Magiline típusú medencerendszerekhez.</p>
      </footer>

    </div>
  );
}
