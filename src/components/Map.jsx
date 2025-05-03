import React from 'react'
import "../css/Footer.css"
const Map = () => {
  return (
    <div  className='container d-flex justify-content-center' style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.014927146927!2d-65.20982928496048!3d-26.83235768315721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0aebaf88c9%3A0xc8db42de44440b25!2sUTN%20-%20Facultad%20Regional%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1682440083973!5m2!1ses-419!2sar"
        width="75%"
        height="90%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa UTN FRT"
      ></iframe>
    </div>
  )
}

export default Map

