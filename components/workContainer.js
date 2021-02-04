import utilStyles from '../styles/utils.module.css'

const WorkContainer = ({title, src, alt, description, link}) => {
  
  return (
    <div align="center">
              
      <div >
      
        <div style={{ backgroundColor: "#ffffff", width: 200}}>
          
          <a 
            style={{ textDecoration: "none"}}
            href={"https://oknube.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >

            <img
              src="/images/logos/oknube.svg"
              className={`${utilStyles.imgOkNube}`}
              alt={"OkNube"}
            />
            
          </a>
        
        </div>
        
        <h2 style={{ color: "#c3c3c3"}}>OkNube</h2>
        
        <p className={utilStyles.caption} style={{ color: "#c3c3c3", fontSize: 22, marginRight: 35  }}>
          
          Fui asistente mediante teletrabajo en el mantenimiento y creación de código del proyecto <a style={{ textDecoration: "none", color: "#c3c3c3", fontSize: 22}} target="_blank" href= "https://oknube.com/">https://oknube.com/</a> , que es un sistema para crear tiendas online. 
          
          <br /><br />
        
          En dicho trabajo obtuve experiencia utilizando tecnologías como algunas de las antes mencionadas, además del servicio Cloud9 IDE de Amazon Web Services con el que desarrollé diversas APIs
          para colaborar en el proyecto. También, fui encargado de testear y debuggear distintas funciones del sistema tanto del frontend como del backend.
                    
        </p>
      
      </div>
   
    </div>
  )
}
export default WorkContainer