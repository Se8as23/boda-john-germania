import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// --- TUS IMÁGENES ---
import FOTO_3 from './assets/fotogyj1.png';

// 👇👇👇 CAMBIA ESTO POR EL NOMBRE DE TU ARCHIVO DE FONDO 👇👇👇
import FONDO_TIKTOK from './assets/primera.jpeg'; // <- Pon aquí tu imagen de fondo real

function App() {
  const [isOpen, setIsOpen] = useState(false);        
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50, 
    });
  }, []);

  // Animación de apertura: Gira solapa -> Fade Out
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
      {/* --- SOBRE INICIAL (Overlay) --- */}
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
          
          {/* --- SECCIÓN TIKTOK (Sobre Azul con Fondo de Imagen) --- */}
          <div 
            className="tiktok-container"
            // Aquí se aplica la imagen que importaste arriba
            style={{ 
              backgroundImage: `url(${FONDO_TIKTOK})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed' // Opcional: efecto parallax sencillo
            }}
          >
            
            <div className="tiktok-envelope-bg">
              {/* Cuerpo del sobre (Azul Profundo) */}
              <div className="tiktok-envelope-body"></div>
              
              {/* Solapa Triangular (Azul Profundo) */}
              <div className="tiktok-flap"></div>
              
              {/* Sello de Lacre */}
              <div className="tiktok-seal">JG</div>

              {/* La Carta Blanca */}
              <div className="tiktok-card" data-aos="fade-up" data-aos-duration="1500">
                <p className="tiktok-text">
                  NOS LLENA DE ALEGRÍA PODER COMPARTIR CONTIGO ESTE CAPÍTULO TAN IMPORTANTE DE NUESTRAS VIDAS.
                </p>
                <br/>
                <p className="tiktok-text">
                  HEMOS PREPARADO CON MUCHO AMOR ESTA CELEBRACIÓN, ESPERANDO QUE FORMES PARTE DE NUESTRA HISTORIA.
                </p>
                <br/>
                <p className="tiktok-text" style={{fontSize: '0.7rem', color: '#888'}}>
                  CON TODO NUESTRO CARIÑO,
                </p>
                
                <h2 className="tiktok-names nontranslate" translate='no'>John y Germania</h2>
              </div>
            </div>

          </div>


          {/* 1. PORTADA */}
          <header className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content" data-aos="zoom-in">
              <p className="intro-text">Con la bendición de nuestros padres</p>
              <h1 className='nontranslate' translate='no'>John & Germania</h1>
              <p style={{fontStyle: 'italic', marginTop: '10px'}}>¡Nos Casamos!</p>
              <div className="hero-date">
                SÁBADO 11 ABRIL 2026
              </div>
            </div>
          </header>

          {/* 2. FRASE / HISTORIA */}
          <section className="story-section">
            <div className="story-block" data-aos="fade-up">
              <img src={FOTO_3} alt="Pareja" className="story-img"/>
              <div className="story-text">
                <h3>Nuestra Historia</h3>
                <p>"Cada día que hemos compartido ha sido maravilloso, por eso nos encantaría que nos acompañes en uno de los momentos más especiales de nuestras vidas."</p>
              </div>
            </div>
          </section>

          {/* 3. EVENTOS (Itinerario) */}
          <section className="events-section" style={{backgroundColor: '#f8f9fa'}}>
            <h2 className="section-title" data-aos="fade-up">Itinerario</h2>
            
            <div className="events-container">
              
              {/* Ceremonia */}
              <div className="event-card" data-aos="fade-right">
                <span className="event-icon">⛪</span>
                <h3>Ceremonia Religiosa</h3>
                <div className="event-time">17:00 H</div>
                <p>Parroquia / Capilla</p>
                <p style={{fontSize: '0.9rem', color: '#777'}}>Vía Monay Baguanchi Paccha km 4 1/2</p>
                <a href="https://maps.app.goo.gl/UGcvP1QRpdSGd3Mp8" target="_blank" className="btn-map" rel="noreferrer">
                  Ver Mapa
                </a>
              </div>

              {/* Recepción */}
              <div className="event-card" data-aos="fade-left">
                <span className="event-icon">🥂</span>
                <h3>Recepción</h3>
                <div className="event-time">19:00 H</div>
                <p>Centro de Convenciones Baguanchi</p>
                <p style={{fontSize: '0.9rem', color: '#777'}}>Vía Monay Baguanchi Paccha km 4 1/2</p>
                <a href="https://maps.app.goo.gl/UGcvP1QRpdSGd3Mp8" target="_blank" className="btn-map" rel="noreferrer">
                  Ver Mapa
                </a>
              </div>

            </div>
          </section>

          {/* 4. DETALLES Y RSVP */}
          <footer className="rsvp-footer">
            <div className="container" data-aos="zoom-in">
              <h2 className="section-title" style={{color: 'white', borderBottom: '1px solid white', display: 'inline-block'}}>Detalles</h2>
              
              <div className="rsvp-details">
                <p><strong>CÓDIGO DE VESTIMENTA: FORMAL</strong></p>
                <p style={{fontSize: '0.9rem', opacity: 0.9}}>Se agradece evitar el color blanco.</p>
                <br/>
                <p><strong>REGALOS</strong></p>
                <p style={{fontSize: '0.9rem', opacity: 0.9}}>Lluvia de sobres.</p>
              </div>

              <p style={{marginBottom: '20px'}}>Por favor, confirma tu asistencia:</p>
              
              <a 
                href="https://wa.me/593994050290?text=Hola,%20confirmo%20mi%20asistencia%20a%20la%20boda%20de%20John%20y%20Germania"
                className="btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                CONFIRMAR POR WHATSAPP
              </a>

              <p style={{marginTop: '40px', fontSize: '0.7rem', opacity: 0.6}}>
                Esperamos contar contigo • 2026
              </p>
            </div>
          </footer>

        </div>
      )}
    </>
  );
}

export default App;