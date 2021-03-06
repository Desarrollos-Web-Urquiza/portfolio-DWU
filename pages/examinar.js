import utilStyles from '../styles/utils.module.css'

import TopBar from '../components/topBar.js'
import ProfileImage from '../components/profileImage'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import ExpoVideo from '../components/ExpoVideo'

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
          href={"http://examinar.mipropia.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProfileImage img={"/images/Examin.ar2.png"} big />
           {/* <img
            src={"/images/Examin.ar.png"}
            // className={`${utilStyles.imgProject}`}
            alt={"examin.ar"}
          /> */}
        </a>

        <h1  style={{ marginTop: -15}} >Examin.ar</h1>   

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
            href={"http://examinar.mipropia.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`${utilStyles.pContact}`}>http://examinar.mipropia.com/</p>
          </a>
        </p>
       
        <p  className={utilStyles.letterProject}>
          <b>GitHub:</b> 
          <a 
            style={{ textDecoration: "none"}}
            href={"https://github.com/Desarrollos-Web-Urquiza/EXAMIN.AR"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`${utilStyles.pContact}`}>https://github.com/Desarrollos-Web-Urquiza/EXAMIN.AR</p>
          </a>
        </p>
        
        <p  className={utilStyles.letterProject}>
          <b>Tecnologías utilizadas:   </b> 
          <i> PHP, Boostrap, SQL, MySQL y HTML</i>
        </p>
       
        <br />
       
        <p  className={utilStyles.letterProject}>
          Hace ya varios años atrás, mientras cursaba mi escuela terciaria, me dieron la consigna de hacer una web que le sirviera a una escuela para realizar evaluaciones de forma on-line.
        </p>

        <p  className={utilStyles.letterProject}>
          Por aquel entonces solo contaba con el conocimiento básico que me habían enseñado en los años anteriores, por lo que tenía poca o nula experiencia haciendo proyectos de programación. Así que en esa época realizar una web como esta fue todo una desafío para mí. 
        </p>

        <p  className={utilStyles.letterProject}>
          Como este fue mi primer proyecto, muestra mi evolución como programador. Al compararlo con mis demás proyectos se puede ver el conocimiento y experiencia que fui ganando a lo largo del tiempo y el progreso que fui consiguiendo en todos estos años.
        </p>

        <p  className={utilStyles.letterProject}>
          El sitio tiene principalmente dos usos, por un lado sirve para el visitante que quiere conocer de qué se trata el sistema de Examin.ar y por el otro es ya para el profesor que iniciará sesión y utilizará el servicio. 
        </p>
        
        <br />

        <h2 align="center">La primera versión de Examin.ar</h2>
                     
      </div>

      <div style={{  marginTop: 300}} />
          
      <Footer />     
     
    </div>
  )
}
