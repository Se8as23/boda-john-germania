import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// --- TUS IMÁGENES ---
import FOTO_3 from './assets/fotogyj1.png'; // Foto historia
import FONDO_TIKTOK from './assets/primera.jpeg'; // Fondo sobre
import FONDO_HERO from './assets/segunda.jpeg'; // Fondo imagen transición
import FONDO_DOS from './assets/fondo2.jpeg'; // Fondo imagen transición 2
import IGLESIA from './assets/iglesia.png'; // Icono iglesia
import flor2 from './assets/flor2.png';
import recepcion from './assets/recepcion.png';
import foto4 from './assets/foto4.jpeg';
import floresmarco2 from './assets/floresmarco2.png';


// 👇 IMPORTANTE: Necesitas esta imagen de la flor (PNG transparente)
// Si no la tienes, usa FOTO_3 temporalmente para ver donde va
import FLOR_AZUL from './assets/flores.png'; 
import ramoFondo from './assets/ramoFondo.jpeg';
import RamoFondo2 from './assets/RamoFondo2.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);        
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowContent(true);
      const overlay = document.querySelector('.envelope-overlay');
      if (overlay) overlay.classList.add('fade-out');
      setTimeout(() => AOS.refresh(), 500);
    }, 800);
  };

  return (
    <>
      {/* --- SOBRE INICIAL --- */}
      <div className={`envelope-overlay ${isOpen ? 'open' : ''}`}>
        <div className="envelope-wrapper" onClick={handleOpen}>
          <div className="envelope">
            <div className="wax-seal" translate='no'>JG</div>
          </div>
        </div>
        <div className="click-hint">TOCA PARA ABRIR</div>
      </div>

      {/* --- CONTENIDO WEB --- */}
      {showContent && (
        <div className="main-container">
          
          {/* 1. SECCIÓN TIKTOK (Sobre Azul) */}
          <div className="tiktok-container" style={{ backgroundImage: `url(${FONDO_TIKTOK})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className="tiktok-envelope-bg">
              <div className="tiktok-envelope-body"></div>
              <div className="tiktok-flap"></div>
              <div className="tiktok-seal">JG</div>
              <div className="tiktok-card" data-aos="fade-up">
                <p className="tiktok-text">Con gran alegría queremos compartir contigo uno de los momentos más importantes de nuestras vidas.</p>
                <br/>
                <p className="tiktok-text">Hemos preparado este día con amor, esperando contar con tu presencia en este día tan especial.</p>
                <h2 className="tiktok-names nontranslate" translate='no'>John y Germania</h2>
              </div>
            </div>
          </div>

          {/* 2. IMAGEN DE TRANSICIÓN (FONDO HERO) */}
          {/* Esta es la imagen que querías "entre medias" */}
          <header 
            className="hero-image-transition"
            style={{ backgroundImage: `url(${FONDO_HERO})` }}
          >
            <div className="hero-overlay"></div>
          </header>

          {/* 3. SECCIÓN INVITACIÓN (Actualizada con Padres) */}
          <section className="watercolor-invite">
            
            {/* Flores Decorativas */}
            <img src={flor2} alt="flor" className="wc-flower top-right" />
            <img src={flor2} alt="flor" className="wc-flower bottom-left" />

            {/* Marco Central */}
            <div className="wc-frame" data-aos="zoom-in">
              
              {/* Encabezado */}
              <p className="wc-intro" style={{fontStyle: 'italic', marginBottom: '25px'}}>
                Con la bendición de Dios y el apoyo incondicional de nuestros Padres
              </p>
              
              {/* --- COLUMNAS DE PADRES --- */}
              <div className="parents-container">
                
                {/* Padres del Novio */}
                <div className="parents-column">
                  <p>Jhon Alejandro Pesantez Paloqueme</p>
                  <p>Norma Alexandra Peralta Tapia</p>
                </div>

                {/* Padres de la Novia */}
                <div className="parents-column">
                  <p>Guido German Orellana Palomeque</p>
                  <p>Arely Yadira Vega Reyes</p>
                </div>

              </div>

              {/* NOSOTROS */}
              <h3 className="wc-label">NOSOTROS</h3>
              
              {/* Nombres Novios */}
              <h1 className="wc-names nontranslate" translate='no'>
                
                John y Germania
              </h1>
              
              {/* Frase intermedia */}
              <p className="wc-intro" style={{fontSize: '1.1rem', margin: '10px 0'}}>
                Les invitamos a compartir la alegría de
              </p>
              
              {/* Título Boda */}
              <h2 className="wc-title">
                NUESTRO MATRIMONIO
              </h2>
              
              <p className="wc-intro" style={{maxWidth: '450px', margin: '0 auto'}}>
                Todos los días juntos son maravillosos y queremos que nos acompañen en el más importante para nosotros.
              </p>

              {/* Fecha */}
              <div className="hero-date" style={{marginTop: '30px', color: '#5472ae', borderTopColor: '#8faad4'}}>
              </div>

            </div>
          </section>

          <header 
            className="hero-image-transition"
            style={{ backgroundImage: `url(${FONDO_DOS})` }}
          >
            <div className="hero-overlay"></div>
          </header>
{/* 4. SECCIÓN UBICACIÓN (TARJETA AZUL) */}
          <section className="location-section"
  style={{ 
    /* AQUÍ ESTÁ EL TRUCO: Primero el ramo (arriba), luego la textura (abajo) */
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fresh-snow.png")`,
    
    /* Ajustes para el ramo (Capa 1) */
    /*backgroundSize: 'contain, auto', /* 'contain' para el ramo, 'auto' (tamaño real) para la textura */
    /*backgroundPosition: 'center, center', /* Centrado para ambos */
    /*backgroundRepeat: 'no-repeat, repeat', /* El ramo NO se repite, la textura SÍ se repite */
    
    /* Color de fondo base (por si acaso) */
  }}
> 
            <div className="blue-location-card" data-aos="fade-up">
              
              <h2 className="loc-cursive-top">Acompáñanos</h2>
              
              <div className="loc-month">ABRIL</div>
              
              {/* Rejilla de Fecha */}
              <div className="loc-date-grid">
                
                {/* Izquierda: Sábado */}
                <div className="loc-date-item">
                  <div className="loc-line"></div>
                  <span className="loc-year-text">SÁBADO</span>
                  <div className="loc-line"></div>
                </div>

                {/* Centro: Número 11 */}
                <div className="loc-big-num">11</div>

                {/* Derecha: Año */}
                <div className="loc-date-item">
                  <div className="loc-line"></div>
                  <span className="loc-year-text">2026</span>
                  <div className="loc-line"></div>
                </div>

              </div>

              <div className="loc-time">17H00</div>
              <div className="loc-event-title">Ceremonia Religiosa</div>

              {/* Icono Iglesia (Si tienes una imagen SVG mejor, si no usa este emoji o texto) */}
              <span className="loc-icon-church"><img src={IGLESIA} alt="iglesia" width={100} /></span>

              <h3 className="loc-venue-name">
                Parroquia<br/>
                Centro de Convenciones Baguanchi
              </h3>

              <p className="loc-address">
                Vía Monay Baguanchi Paccha km 4 1/2, Cuenca
              </p>

              <a 
                href="https://www.google.com/maps/place/Hosteria+Baguanchi/@-2.9176372,-78.9505078,17z/data=!3m1!4b1!4m9!3m8!1s0x91cd19e4a708ea93:0x16e03752e2a43e9f!5m2!4m1!1i2!8m2!3d-2.9176372!4d-78.9505078!16s%2Fg%2F1hc0wcddp?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=01be9fa5-b526-40cf-bd77-df8065e1c27d" 
                target="_blank" 
                className="btn-location-white"
                rel="noreferrer"
              >
                VER UBICACIÓN 
              </a>

            </div>
          </section>


{/* Asegúrate de importar la imagen del carro arriba si la tienes: */}
{/* import CARRO_IMG from './assets/carro-novios.png'; */}

<section className="location-section"
  style={{ 
    /* Fondo azul texturizado (el mismo de las otras secciones para consistencia) */
    backgroundColor: '#8eccf3',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fresh-snow.png")`,
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center'
  }}
>
  <div className="white-card-reception" data-aos="fade-up">
    
    {/* 1. Texto de Intro */}
    <p className="reception-intro">
       RECEPCIÓN
    </p>

    {/* 2. Imagen del Carro (Reemplaza src con tu variable CARRO_IMG) */}
    <img 
      src={recepcion} 
      alt="Carro Novios" 
      className="car-illustration"
    />

    {/* 3. Nombre del Lugar (Cursiva elegante) */}
    <h2 className="reception-venue">
      Salón - Centro de Convenciones Baguanchi
    </h2>

    {/* 4. Dirección y Hora */}
    <p className="reception-details">
      Vía Monay Baguanchi Paccha km 4 1/2, Cuenca
    </p>
    
    <p className="reception-details" style={{fontSize: '1.1rem', marginTop: '10px'}}>
      19H00
    </p>

    {/* 5. Botón Azul Claro */}
    <a 
      href="https://www.google.com/maps/place/Hosteria+Baguanchi/@-2.9176372,-78.9505078,17z/data=!3m1!4b1!4m9!3m8!1s0x91cd19e4a708ea93:0x16e03752e2a43e9f!5m2!4m1!1i2!8m2!3d-2.9176372!4d-78.9505078!16s%2Fg%2F1hc0wcddp?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=01be9fa5-b526-40cf-bd77-df8065e1c27d" 
      target="_blank" 
      rel="noreferrer"
      className="btn-reception"
    >
      VER UBICACIÓN 
    </a>

  </div>
</section>

          {/* 2. IMAGEN DE TRANSICIÓN (FONDO HERO) */}
          {/* Esta es la imagen que querías "entre medias" */}
          <header 
            className="hero-image-transition"
            style={{ backgroundImage: `url(${foto4})` }}
          >
            <div className="hero-overlay"></div>
          </header>

{/* IMPORTA TUS IMÁGENES ARRIBA */}
{/* import FLOR_AZUL from './assets/flor-azul.png'; */}
{/* import COUPLE_ICON from './assets/couple-formal.png'; */}

<section className="dresscode-section">
  
  {/* 1. Flor gigante de fondo (Watermark) */}
  <img src={FLOR_AZUL} className="watermark-flower" alt="" />
  
  {/* 2. Marco decorativo fino */}
  <div className="thin-frame"></div>
  
  {/* 3. Flores en las esquinas (Tapan el marco) */}
  <img src={floresmarco2} className="flower-corner top-right" alt="decoracion" />
  <img src={floresmarco2} className="flower-corner bottom-left" alt="decoracion" />

  {/* 4. Tarjeta Central (Burbuja) */}
  <div className="dresscode-card" data-aos="zoom-in">
    
    <h3 className="dresscode-title">Vestimenta</h3>
    
    {/* Ícono de la pareja */}
    <img 
      src="https://cdn-icons-png.flaticon.com/512/17639/17639981.png" /* Placeholder de pareja */
      alt="Formal" 
      className="couple-icon" 
    />
    
    <h4 className="dresscode-subtitle">Formal</h4>
    
    <p className="dresscode-text">
      ¡Luce tu mejor look!
    </p>
    
    <p className="dresscode-text">
      Te agradecemos evitar el<br/>
      <strong>color blanco</strong>.
    </p>

  </div>

</section>

          {/* 5. EVENTOS */}
          <section className="events-section" style={{backgroundColor: '#f8f9fa'}}>
            <h2 className="section-title" data-aos="fade-up">Itinerario</h2>
            <div className="events-container">
              <div className="event-card" data-aos="fade-right">
                <span className="event-icon">⛪</span>
                <h3>Ceremonia Religiosa</h3>
                <div className="event-time">17:00 H</div>
                <p>Parroquia / Capilla</p>
                <a href="#" className="btn-map">Ver Mapa</a>
              </div>
              <div className="event-card" data-aos="fade-left">
                <span className="event-icon">🥂</span>
                <h3>Recepción</h3>
                <div className="event-time">19:00 H</div>
                <p>Centro de Convenciones</p>
                <a href="#" className="btn-map">Ver Mapa</a>
              </div>
            </div>
          </section>

          {/* 6. FOOTER */}
          <footer className="rsvp-footer">
            <div className="container" data-aos="zoom-in">
              <h2 className="section-title" style={{color: 'white', borderBottom: '1px solid white'}}>Detalles</h2>
              <div className="rsvp-details">
                <p><strong>CÓDIGO DE VESTIMENTA: FORMAL</strong></p>
                <p>Lluvia de sobres.</p>
              </div>
              <a href="https://wa.me/..." className="btn-whatsapp">CONFIRMAR ASISTENCIA</a>
            </div>
          </footer>

        </div>
      )}
    </>
  );
}

export default App;