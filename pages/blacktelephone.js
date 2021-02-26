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
          <i> React, Create-react-app, Firebase, Redux, Material UI, React Beautiful dnd, Pure-react-carousel y Framer-motion</i>
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

        <VideoContainer src={"/videos/black-telephone-input.mp4"} alt={"black-telephone-input"} size={800} />
        
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

        <VideoContainer src={"/videos/black-telephone-call-system.mp4"} alt={"black-telephone-call-system"} size={800} />

        <br />
        
        <p  className={utilStyles.letterProject}  >
          El sistema por un lado nos provee las siguientes funciones: 
        </p>

        <p  className={utilStyles.letterProject}  >
          <b>Mostrar número:</b> básicamente lo que haría es abrir todos los datos de la persona a la que se va a llamar en una pestaña del navegador aparte para que el gerente pueda compatir su pantalla (mediante alguna APP para videollamadas) y pueda así mostrarle al empleado a qué persona y número debe llamar.  
        </p>

        <p  className={utilStyles.letterProject}  >
          <b>Hecho:</b> en su columna hay un checkbox que sirve para ir registrando el progreso de la lista e ir marcando todos los números que ya fueron llamados
        </p>

        <p  className={utilStyles.letterProject}  >
          <b>Google Maps:</b> el símbolo de esta columna sirve para localizar en el mapa la dirección de la persona a la que se llamará en caso de que se necesite saber más información del lugar en donde vive.  
        </p>

        <p  className={utilStyles.letterProject}  >
          Por el otro lado, tenemos también el botón de la columna <b>"No en casa"</b>
        </p>

        <br />

        <VideoContainer src={"/videos/black-telephone-noHouse.mp4"} alt={"black-telephone-noHouse"} size={800} />

        <br />

        <p  className={utilStyles.letterProject}  >
          Si tocamos ese botón, se nos agregarán los datos de la persona a otra tabla también llamada "No en casa". Esa lista servirá para tener un registro organizado de todos los números telefónicos que no atendieron la primera vez y posibilitará descargarlos en un nueva hoja de cálculo para volver a llamarlos en otra ocasión.
        </p>
        
        <p  className={utilStyles.letterProject}  >
         <div style={{ float: "left", marginTop: 15 }}> Finalmente, el sistema de llamadas también nos provee el botón  </div>
          <img
            src="/images/shifts-button.png"
            // style={{width: 120, height: 50, marginLeft: 10 }}
            className={utilStyles.shiftsButton}
            alt={"shifts-button"}
          />        
        </p>
        

        <br />

          <VideoContainer src={"/videos/black-telephone-shifts.mp4"} alt={"black-telephone-shifts"} size={900} />

        <br />

        <p  className={utilStyles.letterProject}  >
          Al tocar ese botón, se nos abrirá una ventana en la que podremos ir ingresando el orden de empleados que están llamando para poder establecer los turnos a tener en cuenta cuando se dé vuelta la ronda de llamadas. 
        </p>
        
        <p  className={utilStyles.letterProject}  >
          Si el empleado hace más de una llamada, con el botón <b>"+"</b> se le agregará un telefonito al nombre de la persona indicando que llamó más de una vez.
        </p>
        
        <p  className={utilStyles.letterProject}  >
          Para modificar el orden de los turnos, se pueden arrastrar los nombres. Esto es gracias a una librería llamada <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://github.com/atlassian/react-beautiful-dnd"}
            target="_blank"
            rel="noopener noreferrer"
          > "React Beautiful dnd"</a>.
        </p>
        
        <h2 align="center"  style={{  marginTop: 100}}>Sistema de informes de trabajo</h2>

        <p  className={utilStyles.letterProject}  >
          Debido a una cuestión estadística, a esta empresa ficticia le gustaría contar con un formulario que permita encuestar a cada uno de sus empleados todos los meses y poder registrar sus respuestas de forma ordenada.
        </p>
        
        <p  className={utilStyles.letterProject}  >
          Y precisamente para eso sirve el formulario de la sección <b>"Informar"</b> de la página
        </p>

        <VideoContainer src={"/videos/black-telephone-inform.mp4"} alt={"black-telephone-inform"} size={900} />
       
        <br />
       
        <p  className={utilStyles.letterProject}  >
          Como se puede ver, el formulario le hace una serie de validaciones a su contenido antes de que este sea enviado.
        </p>

        <p  className={utilStyles.letterProject}  >
          Puntualmente evalúa que se cumplan las siguiente condiciones:
        </p>

        <div style={{marginLeft: 15}}>
          <p className={utilStyles.letterProject}>
            <li>No se debe dejar ningún input obligatorio vacío</li> 
            <br />
            <li>Si pone un cero en la parte de horas trabajadas, también debe hacerlo en los otros campos</li>
            <br />
            <li>La misma persona no puede enviar más de un informe en un mismo mes</li>
          </p>
        </div>
        
        <br />

        <p  className={utilStyles.letterProject}  >
          Luego de validar las respuestas y enviarlas estas se guardan en la base de datos de <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://firebase.google.com/"}
            target="_blank"
            rel="noopener noreferrer"
          > Firebase</a>, que es un servicio de Google que tiene muchísimas utilidades, y se pueden ver en la página <b>"Estadísticas"</b>
        </p>
        
        <br />
       
        <VideoContainer src={"/videos/black-telephone-statistics.mp4"} alt={"black-telephone-statistics"} size={900} />

        <br />

        <p  className={utilStyles.letterProject}  >
          Vemos que los informes se pueden filtrar por mes y que también se pueden elminar individual o grupalmente en base a un mes específico.
        </p>

        <p  className={utilStyles.letterProject}  >
          Además, podemos modificar cada informe de la siguiente manera
        </p>
        

        <br />

        <VideoContainer src={"/videos/black-telephone-edit.mp4"} alt={"black-telephone-edit"} size={900} />
        
        <br />
        
        <p  className={utilStyles.letterProject}  >
          Este formulario para editar hace exactamente las mismas validaciones que el anterior que usábamos para registrarlos.
        </p>

        <p  className={utilStyles.letterProject}  >
          El efecto de transición que se puede ver en esta sección y en todo el sitio web es gracias a una librería llamada <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.framer.com/motion/"}
            target="_blank"
            rel="noopener noreferrer"
          > "Framer-motion"</a>.
        </p>

        <p  className={utilStyles.letterProject}  >
          De esta manera completamos el <b>CRUD</b> de todo el sistema de informes de trabajo. 
        </p>

        <h2 align="center"  style={{  marginTop: 100}}>Otras características de Black Telephone</h2>

        <p  className={utilStyles.letterProject}  >
          Algunos detalles extras sobre cómo utilizo React en todo este proyecto es el uso de los <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://es.reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class"}
            target="_blank"
            rel="noopener noreferrer"
          > ciclos de vida</a> junto a los componentes de clase de React en el "Sistema de informes de trabajo". Esto es así porque en principio aprendí a usar las versiones viejas del framework.
        </p>

        <p  className={utilStyles.letterProject}  >
          Luego al crear el "Sistema de llamadas", empecé a usar los <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://es.reactjs.org/docs/hooks-intro.html"}
            target="_blank"
            rel="noopener noreferrer"
          > Hooks</a> y componentes funcionales de React. Así que estoy familiarizado con ambas versiones de React.
        </p>       

        <p  className={utilStyles.letterProject}  >
          Además destaco el uso de la librería <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://es.redux.js.org/"}
            target="_blank"
            rel="noopener noreferrer"
          > Redux </a> la cual uso principalmente en la parte de los informes. En realidad, es mejor evitar usarlo y utilizar solo los estados locales de los componentes, pero aun así sigue siendo bastante útil para esparcir el estado en toda la app de una forma rápida.
        </p>         
      </div>

      

      <div style={{  marginTop: 300}} />
          
      <Footer />     
     
    </div>
  )
}
