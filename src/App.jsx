import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const openEnvelope = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsHidden(true);
    }, 800);
  };

  return (
    <>
      {/* SOBRE */}
      <div className={`envelope-container ${isOpen ? 'hidden' : ''} ${isOpen ? 'open' : ''}`} onClick={openEnvelope}>
        <div className="envelope-wrapper">
          <div className="envelope">
            <div className="wax-seal">J&G</div>
          </div>
        </div>
        <div className="click-hint">Toque para abrir</div>
      </div>

      {/* TARJETA */}
      <div className={`invitation-card ${isHidden ? 'visible' : ''}`}>
        
        {/* Borde Decorativo Interno */}
        <div className="ornamental-border">
          
          <p className="intro">Con la bendición de Dios y nuestros padres</p>
          
          <h1>John & Germania</h1>
          
          <p className="details-text" style={{fontStyle:'italic', fontSize: '1.2rem'}}>
            ¡Nos Casamos!
          </p>
          <p className="details-text">
            Tenemos el honor de invitarte a celebrar nuestra unión.
          </p>

          <div className="date-block">
            <span className="big-date">SÁBADO 11 ABRIL 2026</span>
            <div className="city">CUENCA • ECUADOR</div>
          </div>

          {/* GRID: Lado a lado en PC, Columna en Móvil */}
          <div className="events-row">
            
            {/* Columna Izquierda: Ceremonia */}
            <div className="event-col">
              <h2>Ceremonia</h2>
              <p className="details-text"><strong>17:00 Horas</strong></p>
              <p className="details-text">Parroquia / Capilla</p>
              <p className="details-text" style={{fontSize:'0.8rem'}}>Vía Monay Baguanchi Paccha km 4 1/2</p>
              <a 
                href="https://goo.gl/maps/LINK_AQUI" 
                target="_blank" 
                rel="noreferrer" 
                className="btn"
              >
                Mapa
              </a>
            </div>

            {/* Columna Derecha: Recepción */}
            <div className="event-col">
              <h2>Recepción</h2>
              <p className="details-text"><strong>19:00 Horas</strong></p>
              <p className="details-text">Salón de Eventos</p>
              <p className="details-text">Centro de Convenciones Baguanchi</p>
              <a 
                href="https://goo.gl/maps/LINK_AQUI" 
                target="_blank" 
                rel="noreferrer" 
                className="btn"
              >
                Mapa
              </a>
            </div>

          </div>

          <hr style={{margin: '40px 0', border: 'none', borderTop: '1px solid #eee'}} />

          <div className="footer-details">
            <h2>Detalles</h2>
            <p className="details-text"><strong>CÓDIGO DE VESTIMENTA: FORMAL</strong></p>
            <p className="details-text" style={{fontSize: '0.85rem', color: '#999'}}>
              Reservamos el color blanco para la novia.
            </p>
            
            <br/>
            
            <p className="details-text"><strong>REGALOS</strong></p>
            <p className="details-text">
              Su presencia es nuestro mejor regalo. Si desean tener un detalle,<br/>dispondremos de lluvia de sobres.
            </p>
          </div>

          {/* Botón Principal */}
          <a 
            href="https://wa.me/5939XXXXXXXX?text=Confirmo%20mi%20asistencia" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-main"
          >
            CONFIRMAR ASISTENCIA
          </a>

        </div>
      </div>
    </>
  )
}

export default App