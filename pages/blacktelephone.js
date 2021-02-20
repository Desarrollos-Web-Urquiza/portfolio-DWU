import utilStyles from '../styles/utils.module.css'

import TopBar from '../components/topBar.js'
import ProfileImage from '../components/profileImage'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import VideoContainer from '../components/videoContainer'

export default function Contact(props) {
  
  const [drawerOpened, setDrawerOpened] = React.useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpened(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpened(false)
  }
  
  return (
     
    <div className={`${utilStyles.mainDivContainer}`}>    

      <div 
        align= "center" 
        className={`${utilStyles.header}`}
      >

        <TopBar
          
          page={"home"} 
          onOpenDrawer={handleDrawerOpen}
          history={props.history}
          
        />

        <Drawer

          onClose={handleDrawerClose}
          open={drawerOpened}
          history={props.history}
        
        />      
        
        <a 
          style={{ textDecoration: "none"}}
          href={"https://black-telephone.vercel.app/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProfileImage img={"/images/BlackTelephone2.png"} />
        </a>

        <h1>Black Telephone</h1>   

      </div>

      <br />
      <br />
      <br />
      
      <div className={utilStyles.container}>
       
        <h2 align="center">Datos generales</h2>
        
        <p  className={utilStyles.letterProject}>
          <b>Sitio web:     </b>  
          <a 
            style={{ textDecoration: "none"}}
            href={"https://black-telephone.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`${utilStyles.pContact}`}>https://black-telephone.vercel.app/</p>
          </a>
        </p>
       
        <p  className={utilStyles.letterProject}>
          <b>GitHub:</b> 
          <a 
            style={{ textDecoration: "none"}}
            href={"https://github.com/Desarrollos-Web-Urquiza/black-telephone"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`${utilStyles.pContact}`}>https://github.com/Desarrollos-Web-Urquiza/black-telephone</p>
          </a>
        </p>
        
        <p  className={utilStyles.letterProject}>
          <b>Tecnologías utilizadas:   </b> 
          <i> React, Firebase, Redux, Material UI, Pure-react-carousel y Framer-motion</i>
        </p>
       
        <br />
       
        <p  className={utilStyles.letterProject}>
          Luego de dar mis primeros pasos con React Native vi la necesidad de pasar a aprender el framework aplicado a la web, que en sí es mi verdadera especialidad. Realmente no fue un cambio muy drástico, porque React sigue siendo React ya sea para webs o para apps.
        </p>
      
        <p  className={utilStyles.letterProject}>
          Así que me propuse hacer un proyecto dedicado a una empresa de call center ficticia llamada "Black Telephone". 
        </p>

        <p  className={utilStyles.letterProject}>
          El proyecto persigue principalmente estos propósitos: 
        </p>

        <br />

        <div style={{marginLeft: 15}}>
          <p  className={utilStyles.letterProject}>
            <li>Dar publicidad a la empresa mostrando su información básica</li> 
            <br />
            <li>Crear un sistema para enviar y registrar los informes del trabajo de los empleados</li>
            <br />
            <li>Crear otro sistema para posibilitar el trabajo en equipo de los empleados en la modalidad "home office" </li>
          </p>
        </div>
        
        <h2 align="center"  style={{  marginTop: 100}}>Landing page</h2>
        
        <VideoContainer src={"/videos/black-telephone-landing.mp4"} alt={"black-telephone-landing"} />

        <p  className={utilStyles.letterProject}  style={{  marginTop: 50}}>
          Mentiría si dijera que esta landing page está hecha 100% por mí, porque en realidad la base la saqué de otro repositorio de GitHub que no hice yo. 
        </p>
        
        <p  className={utilStyles.letterProject}  >
          El carousel ya estaba hecho, pero le modifiqué sus estilos para que visto de cierto modo parezca un teléfono y haga juego con la temática del sitio. Además el componente del TopBar es el mismo que usé en este portfolio, solo le voy cambiando el color de fondo, los logos y los links. 
          <br />  <br /> 
          Luego, el estilo de los recuadros que se ven más abajo ya estaban definidos pero les agregué iconos diferentes inspirados en los que encontré en otra página. El contenido de la página sí lo hice yo pero también está inspirado en un componente ya hecho. Por último, el footer es un calco en el que solo le cambié la información y colores de fondo.
        </p>
    
        <p  className={utilStyles.letterProject}  >
          Todo esto demuestra (además de mi carencia de grandes habilidades UI/UX😅) que estoy acostumbrado a trabajar con código ajeno para poder adaptarlo a mis necesidades y luego reciclarlo en el mismo proyecto o en otros. La carencia antes mencionada me obliga constantemente a usar librerías o plantillas ya hechas como algunas de las que mencionaré más adelante.
        </p>

        <p  className={utilStyles.letterProject}  >
          Leer y tratar de entender el código de los demás fue un principio fundamental en mi aprendizaje que aceleró mucho el proceso de acostumbrarme al framework.
        </p>

      </div>
      
      <div style={{  marginTop: 300}} />
     
      
      <Footer />     
     
    </div>
  )
}
