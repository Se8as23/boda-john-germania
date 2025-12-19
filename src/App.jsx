import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* --- PANTALLA DEL SOBRE --- */}
      <div className={`envelope-container ${isOpen ? 'fade-out' : ''}`} onClick={handleOpen}>
        <div className="envelope-wrapper">
          <div className="envelope">
            <div className="wax-seal">J & G</div>
          </div>
        </div>
        <div className="click-hint">TOCA EL SOBRE PARA ABRIR</div>
      </div>

      {/* --- CONTENIDO DE LA INVITACIÓN --- */}
      <div className={`invitation-content ${isOpen ? 'visible' : ''}`}>
        
        <p className="intro">Con la bendición de Dios y nuestros padres</p>
        
        <h1>John y Germania</h1>
        
        <p>¡NOS CASAMOS!</p>
        <p>Tenemos el honor de invitarte a celebrar nuestra unión.</p>

        <div className="date-box">
          <p>SÁBADO</p>
          <span className="big-date">11 • ABRIL • 2026</span>
          <p>CUENCA, ECUADOR</p>
        </div>

        {/* Ceremonia */}
        <h2>Ceremonia Religiosa</h2>
        <p><strong>17:00 PM</strong></p>
        <p>Parroquia / Capilla</p>
        <p>Vía Monay Baguanchi Paccha km 4 1/2</p>
        <a 
          href="https://goo.gl/maps/TU_LINK_AQUI" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn"
        >
          Ver Ubicación
        </a>

        {/* Recepción */}
        <h2>Recepción</h2>
        <p><strong>19:00 PM</strong></p>
        <p>Salón - Centro de Convenciones Baguanchi</p>
        <p>Vía Monay Baguanchi Paccha km 4 1/2</p>
        <a 
          href="https://goo.gl/maps/TU_LINK_AQUI" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn"
        >
          Ver Ubicación
        </a>

        {/* Detalles Extra */}
        <h2>Código de Vestimenta</h2>
        <p>FORMAL</p>
        <p style={{fontSize: '0.9rem', fontStyle: 'italic'}}>
          Reservamos el color blanco para la novia.
        </p>

        <h2>Regalos</h2>
        <p>Su presencia es nuestro mayor regalo.</p>
        <p>Si desean tener un detalle con nosotros, dispondremos de un buzón de sobres (lluvia de sobres) en la recepción.</p>

        <br />
        <hr style={{margin: '30px 0', border: 'none', borderTop: '1px solid #eee'}}/>

        <h3>Confirmación</h3>
        <p>Por favor confirma tu asistencia antes del evento.</p>
        
        {/* REEMPLAZA EL NÚMERO AQUÍ: 593xxxxxxxxx */}
        <a 
          href="https://wa.me/5939XXXXXXXX?text=Hola,%20confirmo%20mi%20asistencia%20a%20la%20boda%20de%20John%20y%20Germania" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary"
        >
          Confirmar por WhatsApp
        </a>

      </div>
    </>
  )
}

export default App