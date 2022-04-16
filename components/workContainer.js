import Link from 'next/link'

import Button from '@material-ui/core/Button';

import utilStyles from '../styles/utils.module.css'

import ProfileImage from '../components/profileImage'


const WorkContainer = ({title, src, alt, description, link}) => {
  
  return (
    <div align="center" style={{ }}>
              
      <div style={{ marginTop: "3em", paddingBottom: 130 }} >
      
        <div style={{ backgroundColor: "#ffffff", width: 200 }}>
          
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
        
        <p className={utilStyles.caption} style={{ color: "#c3c3c3", fontSize: 22, marginRight: 35, maxWidth: "60em",  padding: "0 1rem"   }}>
          
          Fui backend developer trabajando en la startup <a style={{ textDecoration: "none", color: "#c3c3c3", fontSize: 22}} target="_blank" href= "https://oknube.com/">"OkNube"</a>. La cuál se dedicaba a desarrollar un sistema para crear tiendas online. 
          
          <br /><br />
        
          En dicho trabajo obtuve experiencia utilizando varias tecnologías como por ejemplo Node.js y Express.js. También sesarrollé APIs, trabajé con la base de datos y realizé tareas de testeo y debuggeo de gran parte de las funciones del sistema tanto del frontend como del backend.
          
        </p>
        
        <br />
        
        <Link href= {'/oknube'}>
          <Button variant="contained" color="default"   > 
            +MÁS INFO.
          </Button>
        </Link>      

      </div>

      <div style={{ marginTop: "3em", paddingBottom: 130 }} >
        <a 
          style={{ textDecoration: "none"}}
          href={"http://www.electro3.com.ar/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProfileImage big={true} img={"/images/logos/electro3-logo.jpg"} />
        </a>
      
        <h2 style={{ color: "#c3c3c3"}}>Electro 3</h2>
        
        <p className={utilStyles.caption} style={{ color: "#c3c3c3", fontSize: 22, marginRight: 35, maxWidth: "60em",  padding: "0 1rem"   }}>
          
          Ahora soy frontend developer en la empresa <a style={{ textDecoration: "none", color: "#c3c3c3", fontSize: 22}} target="_blank" href= "http://www.electro3.com.ar/">"Electro 3"</a>. Dicha empresa se dedica a varios rubros entre los cuales figura el desarrollo de software.

          <br /><br />

          Si bien mis principales tareas como desarrollador en esta empresa se relacionan con el frontend, también he participado en etapas del desarrollo del backend y además me ha tocado ser QA. Utilicé tecnologías como Vue, Jest o Cypress, entre muchas otras más.

        </p>
        
        <br />
        
        <Link href= {'/electro3'}>
          <Button variant="contained" color="default"   > 
            +MÁS INFO.
          </Button>
        </Link>      
              
    </div>
      
    </div>
  )
}
export default WorkContainer