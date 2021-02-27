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
          href={"https://drive.google.com/file/d/1jRyagCF5wYWwDA-tdtWNo2TBW2qUqaGY/view"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProfileImage img={"/images/expolearning.png"} />
        </a>

        <h1>Expolearning</h1>   

      </div>

      <br />
      <br />
      <br />
      
      <div className={utilStyles.container}>
       
        <h2 align="center">Datos generales</h2>
        
        <p  className={utilStyles.letterProject}>
          <b>APK:     </b>  
          <a 
            style={{ textDecoration: "none"}}
            href={"https://drive.google.com/file/d/1jRyagCF5wYWwDA-tdtWNo2TBW2qUqaGY/view"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`${utilStyles.pContact}`}>Descargar expolearning</p>
          </a>
        </p>
       
        <p  className={utilStyles.letterProject}>
          <b>GitHub:</b> 
          <a 
            style={{ textDecoration: "none"}}
            href={"https://github.com/Desarrollos-Web-Urquiza/expolearning"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`${utilStyles.pContact}`}>https://github.com/Desarrollos-Web-Urquiza/expolearning</p>
          </a>
        </p>
        
        <p  className={utilStyles.letterProject}>
          <b>Tecnologías utilizadas:   </b> 
          <i> React Native, Expo, React Navigation, Native Base, Firebase y Redux</i>
        </p>
       
        <br />
       
        <p  className={utilStyles.letterProject}>
          Fue mi primera y única  experiencia con el framework React Native y como su nombre lo indica, creé esta APP para poder aprender a usar la plataforma <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://expo.io/"}
            target="_blank"
            rel="noopener noreferrer"
          >Expo</a>  que sirve principalemente para desarrollar y desplegar un proyecto hecho en React Native y poder compilarlo para poder instalarlo en dispositivos Android o iOS. 
        </p>
      
        <p  className={utilStyles.letterProject}>
          En mi caso, la APP "expolearning" está hecha para dispotivos con Android 5 o superior. Y gracias a Expo fue fácil desarrollarla, ya que es una muy buena alternativa menos compleja que otros servicios como Android Studio.
        </p>

        <p  className={utilStyles.letterProject}>
          La APP es bastante sencilla, sirve para registrarse, iniciar sesión y empezar a registrar notas a modo de recordatorios.
        </p>

        <br />
        
        <h2 align="center"  style={{  marginTop: 100}}></h2>
              
      </div>

      

      <div style={{  marginTop: 300}} />
          
      <Footer />     
     
    </div>
  )
}
