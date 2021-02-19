import contactData from '../data/contactData'

import utilStyles from '../styles/utils.module.css'

import TopBar from '../components/topBar.js'
import ProfileImage from '../components/profileImage'
import Section from '../components/section'
import Drawer from '../components/drawer'
import Footer from '../components/footer'

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
          <i> Firebase, Redux, Material UI, Pure-react-carousel y Framer-motion</i>
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
        <div align="center" >
          <div style={{  maxWidth: 550}}>
            <video 
              autoPlay
              muted
              loop
              src={"/videos/black-telephone-landing.mp4"}
              className={utilStyles.projectIcon}
              alt={"name"}
              style={{width: "100%", height: "100%"}}
            />
          </div>
        </div>
      </div>
      
      <div style={{  marginTop: 300}} />
     
      
      <Footer />     
     
    </div>
  )
}
