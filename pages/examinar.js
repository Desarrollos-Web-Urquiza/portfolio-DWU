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
          <i> PHP, Boostrap, SQL, MySQL, phpMyAdmin y HTML</i>
        </p>
       
        <br />
       
        <p  className={utilStyles.letterProject}>
          Hace ya varios años atrás, mientras cursaba mi escuela terciaria, me dieron la consigna de hacer una web que le sirviera a una escuela para realizar evaluaciones de forma online.
        </p>

        <p  className={utilStyles.letterProject}>
          Por aquel entonces solo contaba con el conocimiento básico que me habían enseñado en los años anteriores, por lo que tenía poca o nula experiencia haciendo proyectos de programación. Así que en esa época realizar una web como esta fue todo una desafío para mí. 
        </p>

        <p  className={utilStyles.letterProject}>
          Como este fue mi primer proyecto, muestra mi evolución como programador. Al compararlo con mis demás proyectos se puede ver el conocimiento y experiencia que fui ganando a lo largo del tiempo y el progreso que fui consiguiendo en todos estos años.
        </p>

        <p  className={utilStyles.letterProject}>
          {/* El sitio tiene principalmente tres usos: por un lado sirve para el visitante que quiere conocer de qué se trata el sistema de Examin.ar y por el otro es ya para el profesor que iniciará sesión y utilizará el servicio. Además, sirve para los administradores del sitio que darán de alta o baja a las cuentas de los profesores. */}
          El sitio tiene principalmente tres usos:
        </p>
          
        <p  className={utilStyles.letterProject}>
            <li>Al visitante común le servirá para conocer de qué se trata el sistema de Examin.ar y solicitar el servicio</li> 
            <br />
            <li>A los profesores les servirá para loguearse y usar el sistema</li>
            <br />
            <li>Los administradores del sitio podrán gestionar las cuentas de los profesores y agregar novedades al sitio</li>
        </p>
        
        <br />

        <h2 align="center">La primera versión de Examin.ar</h2>
        
        <p  className={utilStyles.letterProject}>
          Como no tenía un conocimiento de CSS muy avanzado, la estética del sitio era muy mala.  
        </p>

        <p  className={utilStyles.letterProject}>
          Las funcionalidades cumplían bastante bien con sus objetivos, pero no ofrecía una interfaz gráfica que para el usuario sea algo agradable de ver. 
        </p>

        <p  className={utilStyles.letterProject}>
          Así es como se veía al principio😅 
        </p>

        <br />
        
        <VideoContainer src={"/videos/examinar-old.mp4"} alt={"examinar-old"} size={800} />
        
        <br />

        <p  className={utilStyles.letterProject}>
          La página no era responsive, y a simple vista no se veía nada bien.
        </p>

        <p  className={utilStyles.letterProject}>
          Eso restó puntos en mi nota final una vez que presenté este proyecto. Pero de todas formas aprobé por las funcionalidades que le logré crear, las cuales explicaré más adelante
        </p>

        <br />

        <h2 align="center">Rediseño del sitio</h2>

        <p  className={utilStyles.letterProject}>
          Pasó el tiempo, terminé mi terciario, y comencé a profundizar más en mis conocimientos de diseño web.
        </p>

        <p  className={utilStyles.letterProject}>
          Así es como descubrí que existían frameworks de CSS tales como <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://getbootstrap.com/"}
            target="_blank"
            rel="noopener noreferrer"
          > Bootstrap</a>.
        </p>

        <p  className={utilStyles.letterProject}>
          Decidí hacer un curso online para aprender a usarlo y una vez terminado se lo importé a mi proyecto. Probé algunas clases y me gustó. Entonces me descargué un template hecho completamente con este framework y con eso empecé a rediseñar todo el sitio de Examin.ar.
        </p>

        <p  className={utilStyles.letterProject}>
          Los resultados eran increíblemente distintos. 
        </p>

        <p  className={utilStyles.letterProject}>
          ¡El sitio ahora se veía bien y era adaptable a cualquier dispositivo!
        </p>

        <br />
        
        <VideoContainer src={"/videos/examinar-new.mp4"} alt={"examinar-new"} size={900} />
        
        <br />

        <p  className={utilStyles.letterProject}>
          Como se puede ver, esta parte de la web es para que el visitante común obtenga información básica de lo que ofrece la empresa.
        </p>

        <p  className={utilStyles.letterProject}>
          Tiene un formulario de "Contacto" para pedir más información o para solicitar el servicio y la sección de "Beneficios" mostrará porqué alguien debería comprar una cuenta premium. 
        </p>

      </div>

      <div style={{  marginTop: 300}} />
          
      <Footer />     
     
    </div>
  )
}
