import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const openEnvelope = () => {
    setIsOpen(true);
    // Esperamos 1 segundo (lo que dura la animación de desvanecer) para ocultar el div del sobre
    setTimeout(() => {
      setIsHidden(true);
    }, 1000);
  };

  return (
    <>
      {/* --- EL SOBRE --- */}
      <div className={`envelope-container ${isOpen ? 'hidden' : ''} ${isOpen ? 'open' : ''}`} onClick={openEnvelope}>
        <div className="envelope-wrapper">
          <div className="envelope">
            <div className="wax-seal">J&G</div>
          </div>
        </div>
        <div className="click-hint">Click para abrir</div>
      </div>

      {/* --- LA TARJETA DE INVITACIÓN --- */}
      <div className={`invitation-card ${isHidden ? 'visible' : ''}`}>
        
        <p className="intro">Con la bendición de Dios y nuestros padres</p>
        
        <h1>John y Germania</h1>
        
        <p style={{fontStyle: 'italic', marginBottom: '20px'}}>¡Nos Casamos!</p>
        
        <p>Tenemos el honor de invitarte a celebrar<br/>nuestra unión matrimonial.</p>

        <div className="date-block">
          <span className="big-date">11 • ABRIL • 2026</span>
        </div>

        <p className="place">CUENCA - ECUADOR</p>

        {/* Ceremonia */}
        <h2>Ceremonia Religiosa</h2>
        <p><strong>17:00 Horas</strong></p>
        <p>Parroquia / Capilla del lugar</p>
        <p style={{fontSize: '0.9rem'}}>Vía Monay Baguanchi Paccha km 4 1/2</p>
        <a 
          href="https://goo.gl/maps/AQUI_TU_LINK_REAL" 
          target="_blank" 
          rel="noreferrer"
          className="btn"
        >
          VER UBICACIÓN
        </a>

        {/* Recepción */}
        <h2>Recepción</h2>
        <p><strong>19:00 Horas</strong></p>
        <p>Salón - Centro de Convenciones Baguanchi</p>
        <a 
          href="https://goo.gl/maps/AQUI_TU_LINK_REAL" 
          target="_blank" 
          rel="noreferrer"
          className="btn"
        >
          VER UBICACIÓN
        </a>

        {/* Detalles */}
        <h2>Código de Vestimenta</h2>
        <p><strong>FORMAL</strong></p>
        <p style={{fontSize: '0.8rem', color: '#888'}}>
          Se agradece evitar el color blanco.
        </p>

        <h2>Regalos</h2>
        <p>Su presencia es nuestro mejor regalo.</p>
        <p style={{fontSize: '0.9rem'}}>
          Si desean tener un detalle, dispondremos de lluvia de sobres en la recepción.
        </p>

        <hr style={{margin: '40px 0', borderColor: '#eee'}} />

        <h3>Confirmación</h3>
        <p>Esperamos contar con tu presencia.</p>
        
        {/* RECUERDA CAMBIAR EL NUMERO DE TELEFONO AQUI ABAJO */}
        <a 
          href="https://wa.me/593900000000?text=Hola,%20confirmo%20mi%20asistencia%20a%20la%20boda%20de%20John%20y%20Germania" 
          target="_blank" 
          rel="noreferrer"
          className="btn whatsapp"
        >
          CONFIRMAR ASISTENCIA
        </a>
      </div>
    </>
  )
}

export default App