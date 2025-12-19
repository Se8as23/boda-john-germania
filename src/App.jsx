import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar estilos de animación
import './App.css';

// IMAGENES DE EJEMPLO (Reemplázalas con tus imports o rutas)
// import fotoNovios1 from './assets/foto1.jpg'
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Inicializar animaciones
    AOS.init({
      duration: 1000, // Duración de la animación (1s)
      once: true, // Animación solo una vez al bajar
      offset: 100, // Comienza a animar 100px antes de aparecer
    });
  }, []);

  const openEnvelope = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowContent(true);
      // Forzar actualización de AOS al mostrar contenido nuevo
      setTimeout(() => AOS.refresh(), 100); 
    }, 800);
  };

  return (
    <>
      {/* --- SOBRE (Bloquea la vista hasta abrir) --- */}
      <div className={`envelope-overlay ${isOpen ? 'fade-out' : ''}`}>
        <div className={`envelope-container ${isOpen ? 'open' : ''}`} onClick={openEnvelope}>
          <div className="envelope-wrapper">
            <div className="envelope">
              <div className="wax-seal">J&G</div>
            </div>
          </div>
          <div className="click-hint">CLICK PARA ABRIR</div>
        </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL (Se muestra al abrir) --- */}
      {showContent && (
        <main className="wedding-site">
          
          {/* SECCIÓN 1: PORTADA HERO */}
          <section className="hero-section">
            <div className="hero-content" data-aos="zoom-in">
              <p className="intro-text">Con la bendición de Dios</p>
              <h1 className="main-title">John & Germania</h1>
              <p className="sub-title">¡NOS CASAMOS!</p>
              <div className="hero-date">11 • ABRIL • 2026</div>
            </div>
          </section>

          {/* SECCIÓN 2: NUESTRA HISTORIA (FOTOS ANIMADAS) */}
          <section className="story-section">
            
            {/* FOTO 1: Izquierda Texto, Derecha Foto */}
            <div className="story-row">
              <div className="story-text" data-aos="fade-right">
                <h2>El Comienzo</h2>
                <p>Cada día que hemos compartido ha sido maravilloso. Queremos compartir contigo el inicio de esta nueva aventura.</p>
              </div>
              <div className="story-img" data-aos="fade-left">
                {/* REEMPLAZA src CON TU FOTO REAL */}
                <img src={PLACEHOLDER_IMG} alt="Pareja 1" />
              </div>
            </div>

            {/* FOTO 2: Izquierda Foto, Derecha Texto */}
            <div className="story-row reverse">
              <div className="story-text" data-aos="fade-left">
                <h2>Juntos por Siempre</h2>
                <p>El amor es paciente, es bondadoso. El amor nunca deja de ser.</p>
              </div>
              <div className="story-img" data-aos="fade-right">
                 {/* REEMPLAZA src CON TU FOTO REAL */}
                <img src={PLACEHOLDER_IMG} alt="Pareja 2" style={{filter: 'sepia(0.3)'}}/>
              </div>
            </div>

             {/* FOTO 3: Zoom Central */}
             <div className="story-full" data-aos="zoom-in-up">
                <img src={PLACEHOLDER_IMG} alt="Pareja 3" />
                <p className="caption">"Te elijo hoy y todos los días"</p>
            </div>

          </section>

          {/* SECCIÓN 3: DETALLES DEL EVENTO (GRID) */}
          <section className="details-section">
            <div className="ornamental-box" data-aos="fade-up">
              <h2 className="section-title">Detalles del Gran Día</h2>
              
              <div className="events-grid">
                <div className="event-card" data-aos="flip-left">
                  <h3>Ceremonia</h3>
                  <div className="icon">⛪</div>
                  <p><strong>17:00 Horas</strong></p>
                  <p>Parroquia / Capilla</p>
                  <p className="address">Vía Monay Baguanchi Paccha km 4 1/2</p>
                  <a href="#" className="btn-outline">Ver Mapa</a>
                </div>

                <div className="event-card" data-aos="flip-right">
                  <h3>Recepción</h3>
                  <div className="icon">🥂</div>
                  <p><strong>19:00 Horas</strong></p>
                  <p>Salón Baguanchi</p>
                  <p className="address">Centro de Convenciones</p>
                  <a href="#" className="btn-outline">Ver Mapa</a>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 4: REGALOS Y CONFIRMACIÓN */}
          <section className="rsvp-section" data-aos="fade-in">
            <div className="rsvp-content">
              <h3>Código de Vestimenta</h3>
              <p>FORMAL (Evitar color blanco)</p>
              
              <div className="divider"></div>

              <h3>Regalos</h3>
              <p>Lluvia de sobres</p>

              <a 
                href="https://wa.me/5939XXXXXXXX" 
                className="btn-main pulse-btn"
              >
                CONFIRMAR ASISTENCIA
              </a>
            </div>
          </section>

          <footer className="site-footer">
            <p>John & Germania • 2026</p>
          </footer>

        </main>
      )}
    </>
  );
}

export default App;