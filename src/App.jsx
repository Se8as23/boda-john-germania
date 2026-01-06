import { useState, useEffect, useRef } from 'react'; // <--- AGREGADO useRef
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// --- TUS IMÁGENES ---
import FOTO_3 from './assets/fotogyj1.png'; 
import FONDO_TIKTOK from './assets/primera.jpeg'; 
import FONDO_HERO from './assets/segunda.jpeg'; 
import FONDO_DOS from './assets/fondo2.jpeg'; 
import IGLESIA from './assets/iglesia.png'; 
import flor2 from './assets/flor2.png';
import recepcion from './assets/recepcion.png';
import foto4 from './assets/foto4.jpeg';
import floresmarco2 from './assets/floresmarco2.png';
import vestimenta from './assets/vestimenta.png';
import foto5 from './assets/foto5.jpeg';
import foto6 from './assets/foto6.jpeg';
import mail from './assets/mail.png';
import FLOR_AZUL from './assets/flores.png'; 
import ramoFondo from './assets/ramoFondo.jpeg';
import RamoFondo2 from './assets/RamoFondo2.png';

// 👇 IMPORTANTE: CAMBIA ESTO POR EL NOMBRE DE TU CANCIÓN
import MUSICA_FONDO from './assets/cancion.mp3'; 

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  // Estado para controlar si la música suena o no (para el botón)
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Referencia al elemento de audio
  const audioRef = useRef(null);

  // --- LÓGICA DE LA CUENTA REGRESIVA ---
  const calculateTimeLeft = () => {
    // FECHA: 11 Abril 2026, 17:00 (Mes 3 porque Enero es 0)
    const weddingDate = new Date(2026, 3, 11, 17, 0, 0).getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
       timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n) => n < 10 ? `0${n}` : n;

  // --- FUNCIÓN PARA ABRIR SOBRE Y TOCAR MÚSICA ---
  const handleOpen = () => {
    setIsOpen(true);

    // Intentar reproducir música
    if (audioRef.current) {
        audioRef.current.volume = 0.3; // Volumen inicial suave (0.0 a 1.0)
        audioRef.current.play()
            .then(() => {
                setIsPlaying(true);
            })
            .catch((error) => {
                console.log("Reproducción automática bloqueada por el navegador: ", error);
                // Si falla, el usuario tendrá que darle play al botón manual
            });
    }

    setTimeout(() => {
      setShowContent(true);
      const overlay = document.querySelector('.envelope-overlay');
      if (overlay) overlay.classList.add('fade-out');
      setTimeout(() => AOS.refresh(), 500);
    }, 800);
  };

  // --- CONTROL MANUAL DE MÚSICA ---
  const toggleMusic = () => {
      if (audioRef.current) {
          if (isPlaying) {
              audioRef.current.pause();
          } else {
              audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
      }
  };

  return (
    <>
      {/* ELEMENTO DE AUDIO INVISIBLE */}
      <audio ref={audioRef} src={MUSICA_FONDO} loop />

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
          
            {/* BOTÓN FLOTANTE DE MÚSICA */}
            <button 
                onClick={toggleMusic}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999,
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '2px solid #5472ae',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    fontSize: '15px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#5472ae'
                }}
            >
                {isPlaying ? '🔊' : '🔇'}
            </button>

          {/* 1. SECCIÓN TIKTOK (Sobre Azul) */}
          <div className="tiktok-container" style={{ backgroundImage: `url(${FONDO_TIKTOK})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className="tiktok-envelope-bg">
              <div className="tiktok-envelope-body"></div>
              <div className="tiktok-flap"></div>
              <div className="tiktok-seal">JG</div>
              <div className="tiktok-card" data-aos="fade-up">
                <p className="tiktok-text">Con gran alegría queremos compartir uno de los momentos más importantes de nuestras vidas.</p>
                <br/>
                <p className="tiktok-text">Hemos preparado este día con amor, esperando contar con vuestra presencia en una fecha tan especial.</p>
                <h2 className="tiktok-names nontranslate" translate='no'>John y Germania</h2>
              </div>
            </div>
          </div>

          {/* 2. IMAGEN DE TRANSICIÓN (FONDO HERO) */}
          <header 
            className="hero-image-transition"
            style={{ backgroundImage: `url(${FONDO_HERO})` }}
          >
            <div className="hero-overlay"></div>
          </header>

          {/* 3. SECCIÓN INVITACIÓN (Actualizada con Padres) */}
          <section className="watercolor-invite">
            
            <img src={flor2} alt="flor" className="wc-flower top-right" />
            <img src={flor2} alt="flor" className="wc-flower bottom-left" />

            <div className="wc-frame" data-aos="zoom-in">
              
              <p className="wc-intro" style={{fontStyle: 'italic', marginBottom: '25px'}}>
                Con la bendición de Dios y el apoyo incondicional de nuestros Padres
              </p>
              
              <div className="parents-container">
                <div className="parents-column">
                  <p>Jhon Alejandro Pesantez Paloqueme</p>
                  <p>Norma Alexandra Peralta Tapia</p>
                </div>

                <div className="parents-column">
                  <p>Guido German Orellana Palomeque</p>
                  <p>Arely Yadira Vega Reyes</p>
                </div>
              </div>

              <h3 className="wc-label">NOSOTROS</h3>
              
              <h1 className="wc-names nontranslate" translate='no'>
                John <br /> y <br /> Germania
              </h1>
              
              <p className="wc-intro" style={{fontSize: '1.1rem', margin: '10px 0'}}>
                Les invitamos a compartir la alegría de
              </p>
              
              <h2 className="wc-title">
                NUESTRO MATRIMONIO
              </h2>
              
              <p className="wc-intro" style={{maxWidth: '450px', margin: '0 auto'}}>
                Todos los días juntos son maravillosos y queremos que nos acompañen en el día más importante para nosotros.
              </p>

              <div className="hero-date" style={{marginTop: '30px', color: '#5472ae', borderTopColor: '#8faad4'}}>
              </div>

            </div>
          </section>

          {/* FOTO FONDO 2 */}
          <header 
            className="hero-image-transition"
            style={{ backgroundImage: `url(${FONDO_DOS})` }}
          >
            <div className="hero-overlay"></div>
          </header>

          {/* 4. SECCIÓN UBICACIÓN (IGLESIA) */}
          <section className="location-section"
            style={{ 
              backgroundColor: '#8eccf3',
              backgroundImage: `url("https://www.transparenttextures.com/patterns/fresh-snow.png")`,
            }}
          > 
            <div className="blue-location-card" data-aos="fade-up">
              
              <h2 className="loc-cursive-top">Acompáñanos</h2>
              
              <div className="loc-month">ABRIL</div>
              
              <div className="loc-date-grid">
                <div className="loc-date-item">
                  <div className="loc-line"></div>
                  <span className="loc-year-text">SÁBADO</span>
                  <div className="loc-line"></div>
                </div>

                <div className="loc-big-num">11</div>

                <div className="loc-date-item">
                  <div className="loc-line"></div>
                  <span className="loc-year-text">2026</span>
                  <div className="loc-line"></div>
                </div>
              </div>

              <div className="loc-event-title">Ceremonia Religiosa</div>

              <span className="loc-icon-church"><img src={IGLESIA} alt="iglesia" width={100} /></span>

              <h3 className="loc-venue-name">
                Parroquia<br/>
                Centro de Convenciones Baguanchi
              </h3>

              <p className="loc-address">
                Vía Monay Baguanchi Paccha km 4 1/2, Cuenca
              </p>
              <div className="loc-time">17H00</div>

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


          {/* 5. SECCIÓN UBICACIÓN (RECEPCIÓN) */}
          <section className="location-section"
            style={{ 
              backgroundColor: '#8eccf3',
              backgroundImage: `url("https://www.transparenttextures.com/patterns/fresh-snow.png")`,
              padding: '60px 20px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div className="white-card-reception" data-aos="fade-up">
              
              <p className="reception-intro">
                 RECEPCIÓN
              </p>

              <img 
                src={recepcion} 
                alt="Carro Novios" 
                className="car-illustration"
              />

              <h2 className="reception-venue" >
                Salón - Centro de Convenciones Baguanchi
              </h2>

              <p className="reception-details">
                Vía Monay Baguanchi Paccha km 4 1/2, Cuenca
              </p>
              
              <p className="reception-details" style={{fontSize: '1.1rem', marginTop: '10px', marginBottom: '20px', fontWeight: '500'}}>
                19H00
              </p>

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

          {/* FOTO FONDO 4 */}
          <header 
            className="hero-image-transition"
            style={{ backgroundImage: `url(${foto4})` }}
          >
            <div className="hero-overlay"></div>
          </header>

          {/* 6. VESTIMENTA */}
          <section className="dresscode-section" 
          style={{ 
              backgroundColor: '#8eccf3',
              backgroundImage: `url("https://www.transparenttextures.com/patterns/fresh-snow.png")`,
              padding: '60px 20px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            
            <img src={FLOR_AZUL} className="watermark-flower" alt="" />
            <img src={floresmarco2} className="flower-corner top-right" alt="decoracion" />
            <img src={floresmarco2} className="flower-corner bottom-left" alt="decoracion" />

            <div className="dresscode-card" data-aos="zoom-in">
              
              <h3 className="dresscode-title">Vestimenta</h3>
              
              <img 
                src={vestimenta} 
                alt="Formal" 
                className="couple-icon" 
              />
              
              <h4 className="dresscode-subtitle">Formal</h4>
              
              <p className="dresscode-text">
                ¡Luce tu mejor look!
              </p>
              
              <p className="dresscode-text">
                Te agradecemos evitar el<br/>
                <strong>color blanco, beige y celeste</strong>.
              </p>

            </div>

          </section>


          {/* FOTO FONDO 5 */}
          <header 
            className="hero-image-transition"
            style={{ backgroundImage: `url(${foto5})` }}
          >
            <div className="hero-overlay"></div>
          </header>

          {/* 8. REGALOS Y CONFIRMACIÓN */}
          <section className="gifts-rsvp-section"
          style={{ 
              backgroundColor: '#8eccf3',
              backgroundImage: `url("https://www.transparenttextures.com/patterns/fresh-snow.png")`,
              
              padding: '60px 20px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            
            <img src={floresmarco2} className="flower-corner top-right" style={{opacity: 0.8}} alt="" />

            {/* --- BURBUJA DE REGALOS --- */}
            <div className="gift-bubble" data-aos="zoom-in">
              <h3 className="gift-title">Sugerencia de Regalos</h3>
              
              <p className="gift-text">
                Tu compañía es nuestro mejor regalo, pero si deseas hacernos un obsequio, tenemos:
              </p>

              <img src={mail} alt="Buzón de sobres" className="mailbox-icon" width={100} 
              
              
              />

              <p className="gift-text" style={{fontWeight: 'bold'}}>
                Buzón de sobres
              </p>
            </div>


            {/* --- CONFIRMACIÓN --- */}
            <div className="rsvp-area" data-aos="fade-up">
              <h3 className="rsvp-title">Confirmación de Asistencia</h3>
              
              <p className="gift-text" style={{maxWidth: '500px', margin: '0 auto'}}>
                Tu presencia es importante para nosotros, por favor confírmanos tu asistencia:
              </p>

              <div className="rsvp-buttons-container">
                
                <a 
                  href="https://wa.me/593994050290?text=Hola,%20confirmo%20mi%20asistencia%20y%20será%20un%20placer%20compartir%20este%20día%20con%20ustedes." 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-rsvp-big"
                >
                  Confirmar a la Novia 
                </a>

                <a 
                  href="https://wa.me/593994463149?text=Hola,%20confirmo%20mi%20asistencia%20y%20será%20un%20placer%20compartir%20este%20día%20con%20ustedes." 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-rsvp-big"
                >
                  Confirmar al Novio 
                </a>

              </div>
            </div>

          </section>

          {/* FOTO FONDO 6 FINAL */}
          <header 
            className="hero-image-transition"
            style={{ backgroundImage: `url(${foto6})` }}
          >
            <div className="hero-overlay"></div>
          </header>


        {/* --- 7. CUENTA REGRESIVA --- */}
          <section className="countdown-section">
            <div data-aos="fade-up">
              
              <h2 className="countdown-title">Nos vemos dentro de</h2>
              
              <div className="timer-container">
                
                {/* DÍAS */}
                <div className="time-unit">
                  <span className="time-number">{pad(timeLeft.days || 0)}</span>
                  <span className="time-label">Días</span>
                </div>

                <div className="time-separator">:</div>

                {/* HORAS */}
                <div className="time-unit">
                  <span className="time-number">{pad(timeLeft.hours || 0)}</span>
                  <span className="time-label">Horas</span>
                </div>

                <div className="time-separator">:</div>

                {/* MINUTOS */}
                <div className="time-unit">
                  <span className="time-number">{pad(timeLeft.minutes || 0)}</span>
                  <span className="time-label">Min</span>
                </div>

                <div className="time-separator">:</div>

                {/* SEGUNDOS */}
                <div className="time-unit">
                  <span className="time-number">{pad(timeLeft.seconds || 0)}</span>
                  <span className="time-label">Seg</span>
                </div>

              </div>

            </div>
          </section>
          
        </div>
      )}
    </>
  );
}

export default App;