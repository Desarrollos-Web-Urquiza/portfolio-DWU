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
            <li>Crear un sistema para posibilitar el trabajo en equipo de los empleados en la modalidad "home office" </li>
            <br />
            <li>Crear otro sistema para enviar y registrar los informes del trabajo de los empleados</li>
          </p>
        </div>
        
        <h2 align="center"  style={{  marginTop: 100}}>Landing page</h2>
        
        <VideoContainer src={"/videos/black-telephone-landing.mp4"} alt={"black-telephone-landing"} size={600} />

        <p  className={utilStyles.letterProject}  style={{  marginTop: 50}}>
          Mentiría si dijera que esta landing page está hecha 100% por mí, porque en realidad la base la saqué de otro repositorio de GitHub que no hice yo. 
        </p>
        
        <p  className={utilStyles.letterProject}  >
          El carousel ya estaba hecho con la librería 
          <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.npmjs.com/package/pure-react-carousel"}
            target="_blank"
            rel="noopener noreferrer"
          > "Pure-react-carousel"</a>, 
          pero le modifiqué sus estilos para que visto de cierto modo parezca un teléfono y haga juego con la temática del sitio. Además el componente del TopBar es el mismo que usé en este portfolio, solo le voy cambiando el color de fondo, los logos y los links. 
          <br />  <br /> 
          Luego, el estilo de los recuadros que se ven más abajo ya estaban definidos pero les agregué iconos diferentes inspirados en los que encontré en otra página. El contenido de la página sí lo hice yo pero también está inspirado en un componente ya hecho. Por último, el footer es un calco en el que solo le cambié la información y colores de fondo.
        </p>
    
        <p  className={utilStyles.letterProject}  >
          Todo esto demuestra (además de mi carencia de grandes habilidades UI/UX😅) que estoy acostumbrado a trabajar con código ajeno para poder adaptarlo a mis necesidades y luego reciclarlo en el mismo proyecto o en otros. La carencia antes mencionada me obliga constantemente a usar librerías o plantillas ya hechas como algunas de las que mencionaré más adelante.
        </p>

        <p  className={utilStyles.letterProject}  >
          Leer y tratar de entender el código de los demás fue un principio fundamental en mi aprendizaje que aceleró mucho el proceso de acostumbrarme al framework.
        </p>

        <h2 align="center"  style={{  marginTop: 100}}>Sistema de llamadas</h2>
        
        <p  className={utilStyles.letterProject}  >
          Esta empresa ficticia tiene un problema que se soluciona con el sistema que creé.
        </p>
        <p  className={utilStyles.letterProject}  >
          El problema es el siguiente:  
        </p>
        <p  className={utilStyles.letterProject}  >
          En vista de la creciente ola del COVID-19, los empleados necesitan hacer los llamados de telemarketing desde su casa en modalidad "home office". Pero para asegurarse de que cumplan con sus jornadas laborales, un gerente debe supervisar y dirigir a grupos de empleados para que estos llamen de forma cooperativa y en grupo a un listado de números telefónicos mientras están conectados entre sí mediante alguna APP para videollamadas como por ejemplo Zoom o Skype.
        </p>
        <p  className={utilStyles.letterProject}  >
          Cada listado de números son archivos de Excel los cuales se les conocerá con el nombre de "Territorios" y estarán ordenados por números. Estos archivos y el sistema será manipulado únicamente por el gerente. Dichos "territorios", serán cargados al sistema de la siguiente manera...
        </p>

        <VideoContainer src={"/videos/black-telephone-input.mp4"} alt={"black-telephone-landing"} size={800} />
        
        <br />
        
        <p  className={utilStyles.letterProject}  >
          Para poder importar el archivo de Excel al sistema, primero lo transformo a formato JSON con una librería muy útil llamada <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.npmjs.com/package/xlsx"}
            target="_blank"
            rel="noopener noreferrer"
          > "xlsx"</a>. Una vez transformada la hoja de cálculo a JSON la imprimo en la web valiéndome de un componente React de tabla que me provee otra librería llamada <a 
          style={{ textDecoration: "none", color: "#0070f2"}}
          href={"https://material-ui.com/"}
          target="_blank"
          rel="noopener noreferrer"
        > "Material UI"</a>. Esta librería fue muy útil para enriquecer toda la interfaz de usuario de este proyecto, debido a que provee muchísimos componentes ya hechos y listos para usar.
        </p>
        
        <p  className={utilStyles.letterProject}  >
          Pasemos ahora a hablar de las funciones con las que cuenta este sistema una vez que la hoja de cálculo fue importada.
        </p>

        <br />

        <p  className={utilStyles.letterProject}  >
          El sistema va a permitir por un lado <b>"Mostrar número"</b>, que básicamente lo que haría es abrir todos los datos de la persona a la que se va a llamar en una pestaña del navegador a parte para que el gerente pueda compatir su pantalla (mediante alguna APP para videollamadas) y pueda así mostrarle al empleado a qué persona y número debe llamar. El checkbox de la columna  <b>"Hecho"</b>  sirve para ir registrando el progreso de la lista e ir marcando todos los números que ya fueron llamados, mientras que el botón de <b>"Google Maps"</b> sirve para localizar en el mapa la dirección de la persona a la que se llamará en caso de que se necesite saber más información del lugar en donde vive. 
        </p>
        
        <p  className={utilStyles.letterProject}  >
          Por el otro lado, tenemos el botón de la columna <b>"No en casa"</b>
        </p>

        <br />

        <p  className={utilStyles.letterProject}  >
          Si tocamos ese botón, se nos agregarán los datos de la persona a otra tabla también llamada "No en casa". Esa lista servirá para tener un registro organizado de todos los números telefónicos que no atendieron la primera vez y posibilitará descargarlos en un nueva hoja de cáluculo para volver a llamarlos en otra ocasión.
        </p>
        <p  className={utilStyles.letterProject}  >
          Finalmente, el sistema de llamadas también nos provee el botón <b>"TURNOS"</b>
        </p>
      </div>

      <div style={{  marginTop: 300}} />
          
      <Footer />     
     
    </div>
  )
}
