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
          Fue mi primera y única  experiencia con React Native y como su nombre lo indica, creé esta APP para poder aprender a usar <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://expo.io/"}
            target="_blank"
            rel="noopener noreferrer"
          >Expo</a>. Esta plataforma sirve principalmente para desarrollar y desplegar un proyecto hecho en React Native y compilarlo para poder instalarlo en dispositivos Android o iOS. 
        </p>
      
        <p  className={utilStyles.letterProject}>
          En mi caso, la APP "expolearning" está hecha para dispositivos con Android 5 o superior. Y gracias a Expo fue fácil desarrollarla, ya que es una muy buena alternativa a otros servicios más complejos como Android Studio.
        </p>

        <p  className={utilStyles.letterProject}>
          La APP es bastante simple, sirve para registrarse, iniciar sesión y empezar a crear notas a modo de recordatorios.
        </p>

        <br />
        
        <h2 align="center">Registro, inicio de sesión y navegación</h2>
        
        <br />
       
        <p  className={utilStyles.letterProject}>
          El primer paso para poder usar la APP es registrarse y loguearse
        </p>
       
        <br />

        <ExpoVideo src={"/videos/expolearning-register-login.mp4"} alt={"expolearning-register-login"}  />
        
        <br /> 
        
        <p  className={utilStyles.letterProject}>
          El registro del usuario lo hago a través de la base de datos noSQL que me provee <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://firebase.google.com/"}
            target="_blank"
            rel="noopener noreferrer"
          > Firebase</a>, que es uno de los servicios que tiene esta tecnología de Google.
        </p>

        <p  className={utilStyles.letterProject}>
          No se necesita ningún sistema de seguridad demasiado complejo al iniciar sesión porque a diferencia de las webs, aquí no se puede ingresar mendiante rutas escritas. Así que solo utilizo la validación de que el usuario exista en la base de datos y que su constraseña sea correcta para que este pueda loguearse.
        </p>

        <p  className={utilStyles.letterProject}>
          Una vez logueado, el usuario verá lo siguiente
        </p>

        <br />

        <ExpoVideo src={"/videos/expolearning-footer.mp4"} alt={"expolearning-footer"}  />
        
        <br /> 

        <p  className={utilStyles.letterProject}>
          De entrada se le dará la bienvenida en la parte del "Home" y luego podrá ir intercambiando secciones mediante los iconos del componente footer. Este y la mayoría de los componentes de esta aplicación, son parte de lo que ofrece la librería  <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://nativebase.io/"}
            target="_blank"
            rel="noopener noreferrer"
          > Native Base</a>.
        </p>

        <p  className={utilStyles.letterProject}>
          Por el otro lado, la nevagación entre las distinas secciones de la APP se hace posible gracias a la librería <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://reactnavigation.org/"}
            target="_blank"
            rel="noopener noreferrer"
          > React Navigation</a>, la cual nos permite manejar las rutas de una forma muy sencilla y similar a como lo haríamos con otras librerías para la web muy conocidas como <a 
          style={{ textDecoration: "none", color: "#0070f2"}}
          href={"https://www.npmjs.com/package/react-router-dom"}
          target="_blank"
          rel="noopener noreferrer"
        > "react-router-dom"</a>.
        </p>

        <br />
        
        <h2 align="center">Gestión de las notas</h2>
        
        <br />
              
        <p  className={utilStyles.letterProject}>
          Ahora ya estamos listos para crear nuestra primera nota.
        </p>
       
        <br />

        <ExpoVideo src={"/videos/expolearning-register-note.mp4"} alt={"expolearning-register-note"}  />

        <br />

        <p  className={utilStyles.letterProject}>
          Como vemos, hacer una nota es muy sencillo. Solo ingresamos el título de la nota, su contenido y tocamos el botón "REGISTRAR NOTA". 
        </p>

        <p  className={utilStyles.letterProject}>
          Para hacer persistir la nota la guardamos en la misma base de datos en donde están los usuarios. La registramos con el "id_user" para que luego al entrar a "Mis notas" se pueda filtrar y solo se impriman aquellas que sean del usuario logueado.
        </p>

        <p  className={utilStyles.letterProject}>
          Dicho ID lo obtengo cuando el usuario inicia sesión y lo traslado al componente para crear notas mendiante <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://es.redux.js.org/"}
            target="_blank"
            rel="noopener noreferrer"
          > Redux </a>. Uso esta librería para esparcir este dato a todas las partes de la aplicación en donde lo necesito.
        </p>

        <p  className={utilStyles.letterProject}>
          Después de todo esto, podemos <b>editar</b> o <b>eliminar</b> nuestras notas.
        </p>

        <br />

        <ExpoVideo src={"/videos/expolearning-edit-delete.mp4"} alt={"expolearning-edit-delete"}  />

        <br />      

        <h2 align="center"  style={{  marginTop: 100}}></h2>
              
      </div>

      <div style={{  marginTop: 300}} />
          
      <Footer />     
     
    </div>
  )
}
