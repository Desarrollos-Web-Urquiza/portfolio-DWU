import React, {useEffect, useState} from 'react';

import utilStyles from '../styles/utils.module.css'

import TopBar from '../components/topBar.js'
import ProfileImage from '../components/profileImage'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import VideoContainer from '../components/videoContainer'
import {Helmet} from "react-helmet";

import filterURL from "../lib/filterURL";

export default function Contact(props) {
  
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [highlightPHPMyAdmin, setHighlightPHPMyAdmin] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpened(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpened(false)
  }

  const restartHighlightElemnt = () =>{
    setHighlightPHPMyAdmin(false)
  }

  useEffect(() => {
    let highlightElemnt = filterURL(window.location.href)
    if(highlightElemnt == "PHPMyAdmin")  {
      setHighlightPHPMyAdmin(true)
    }
    
	},[]);
  
  return (
     
    <div className={`${utilStyles.mainDivContainer}`}  onClick={restartHighlightElemnt}>    

    <Helmet>
            
      <title>DWU - Examin.ar</title>
              
    </Helmet>

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
          href={"https://github.com/Desarrollos-Web-Urquiza/EXAMIN.AR"}
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
       
        <h2 align="center" className={utilStyles.subtitleProject}>Datos generales</h2>
      
        {/* <p className={`${utilStyles.letterProject}`}><b>Sitio web:</b></p>
        <a 
          style={{ textDecoration: "none"}}
          href={"http://examinar.mipropia.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`${utilStyles.pContact} ${utilStyles.letterProject}`}>http://examinar.mipropia.com/</p>
        </a> */}
      
      
      
        <p className={`${utilStyles.letterProject}`}><b>GitHub:</b> </p>
        <a 
          style={{ textDecoration: "none"}}
          href={"https://github.com/Desarrollos-Web-Urquiza/EXAMIN.AR"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`${utilStyles.pContact} ${utilStyles.letterProject}`}>https://github.com/Desarrollos-Web-Urquiza/EXAMIN.AR</p>
        </a>
    
        
        <p  className={utilStyles.letterProject}>
          <b>Tecnologías utilizadas:   </b> 
          <i> PHP, Boostrap, MySQL y phpMyAdmin</i>
        </p>
       
        <br />
       
        <p  className={utilStyles.letterProject}>
          Hace ya varios años atrás, mientras cursaba mi escuela terciaria, me dieron la consigna de hacer una web que le sirviera a una escuela para realizar evaluaciones de forma online.
        </p>

        <p  className={utilStyles.letterProject}>
          Por aquel entonces solo contaba con el conocimiento básico que me habían enseñado en los años anteriores, por lo que tenía poca o nula experiencia haciendo proyectos de programación. Así que realizar una web como esta en esa época fue todo una desafío para mí. 
        </p>

        <p  className={utilStyles.letterProject}>
          Como este fue mi primer proyecto, muestra mi evolución como programador. Al compararlo con mis demás proyectos se puede ver el conocimiento y experiencia que fui ganando a lo largo del tiempo y el progreso que fui consiguiendo en todos estos años.
        </p>

        <p  className={utilStyles.letterProject}>
          {/* El sitio tiene principalmente tres usos: por un lado sirve para el visitante que quiere conocer de qué se trata el sistema de Examin.ar y por el otro es ya para el profesor que iniciará sesión y utilizará el servicio. Además, sirve para los administradores del sitio que darán de alta o baja a las cuentas de los profesores. */}
          El sitio tiene principalmente estos usos:
        </p>

        <div style={{marginLeft: 15}}>
          <p  className={utilStyles.letterProject}>
            <li>Al visitante común le servirá para conocer de qué se trata el sistema de Examin.ar y solicitar el servicio</li> 
            <br />
            <li>Los profesores podrán loguearse y usar las distintas funciones para registrar alumnos y crear evaluaciones</li>
            <br />
            <li>Los alumnos utilizarán el sistema para rendir una evaluación </li>
          </p>
        </div>

        <br />

        <h2 align="center" className={utilStyles.subtitleProject}>La primera versión de Examin.ar</h2>
        
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

        <h2 align="center" className={utilStyles.subtitleProject}>Rediseño del sitio</h2>

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
          Tiene un formulario de <b>"Contacto"</b> para pedir más información o para solicitar el servicio. La sección de <b>"Beneficios"</b> mostrará porqué alguien debería comprar una cuenta premium y la parte de <b>"Novedades"</b> es para estar al tanto de las noticias relacionadas al sitio. 
        </p>

        <br />

        <h2 align="center" className={utilStyles.subtitleProject}>Sección del profesor</h2>

        <p  className={utilStyles.letterProject}>
          El profesor que utilizará el servicio debe ir a "Iniciar sesión" para entrar en la sección de la página que le permitirá usar el sistema de evaluaciones online.
        </p>

        <p  className={utilStyles.letterProject}>
          Para probarlo, podemos usar como ejemplo el usuario <b>"Profesor1"</b> cuya contraseña es <b>"1234"</b> .
        </p>
        
        <br/>

        <VideoContainer src={"/videos/examinar-login-profesor.mp4"} alt={"examinar-login-profesor"} size={900} />

        <br/>

        <p  className={utilStyles.letterProject}>
          Una vez adentro de su sección, ya empezamos a hacer uso de PHP no solo buscando el usuario y contraseña en la base de datos, si no también mediante el objeto  <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.php.net/manual/es/reserved.variables.session.php"}
            target="_blank"
            rel="noopener noreferrer"
          > "$_SESSION"</a>.
        </p>

        <p  className={utilStyles.letterProject}>
          En ese objeto se guardará los datos del usuario que acaba de loguearse y nos permitirá hacer una verificación de su inicio de sesión por cada página que visite. Si copió la URL e intenta ingresar a alguna parte de esta sección sin haber iniciado sesión se lo redirecciona al login.
        </p>

        <br />
       
        <h2 align="center" className={utilStyles.subtitleProject}>Funciones del sistema de evaluaciones online</h2>

        <p  className={utilStyles.letterProject}>
          Hablemos ahora sobre cómo funciona el sistema de evaluaciones online.
        </p>
       
        <p  className={utilStyles.letterProject}>
          El primer paso sería <b>crear</b> una escuela, un curso y un alumno. 
        </p>

        <br/>

        <VideoContainer src={"/videos/examinar-profesor-create.mp4"} alt={"examinar-profesor-create"} size={900} />

        <br/>

        <p  className={utilStyles.letterProject}>
          El DNI del alumno nos permitirá diferenciarlo de los demás en caso de que existan otros alumnos con los mismos nombres.
        </p>
        
        <p  className={utilStyles.letterProject}>
          Después de eso, el próximo paso sería <b>generar evaluación</b>.
        </p>

        
        <br/>

        <VideoContainer src={"/videos/examinar-generate-evaluation.mp4"} alt={"examinar-generate-evaluation"} size={900} />

        <br/>

        <p  className={utilStyles.letterProject}>
         Como vemos, es muy sencillo. Solo especificamos el título de la evaluación, cantidad de preguntas y las preguntas propiamente dichas.
        </p>
        
        <p  className={utilStyles.letterProject}>
         Ahora lo que seguiría sería que ese alumno que registramos anteriormente pueda <b>rendir la evaluación</b> que acabamos de crear.
        </p>

        <br/>

        <VideoContainer src={"/videos/examinar-take-evaluation.mp4"} alt={"examinar-take-evaluation"} size={900} />

        <br/>

        <p  className={utilStyles.letterProject}>
         Solo tenemos que asegurarnos de que el nombre que seleccionemos coincida con el número de DNI. Luego solo queda que el alumno conteste las preguntas.
        </p>

        <p  className={utilStyles.letterProject}>
         Cuando el alumno empiece a rendir el examen y a contestar las preguntas, la sesión de PHP se va a romper. Por lo que si el alumno quiere volver atrás para usar la cuenta del profesor, no va a poder.
        </p>

        <p  className={utilStyles.letterProject}>
         Para poder ver las respuestas del alumno, vamos a <b>Mis alumnos</b>.
        </p>
        
        <br/>

        <VideoContainer src={"/videos/examinar-my-students.mp4"} alt={"examinar-my-students"} size={900} />

        <br/>

        <p  className={utilStyles.letterProject}>
          Una vez dentro de esta página, seleccionamos el alumno y tocamos la evaluación que deseamos ver. 
        </p>

        <p  className={utilStyles.letterProject}>
          Además vemos que también podemos <b>editar</b> o <b>eliminar</b> el alumno. 
        </p>
        
        <br />
        
        <div id="PHPMyAdmin" /> 

        <h2 align="center" className={utilStyles.subtitleProject}>Otras características de Examin.ar</h2>
        
        <p  className={utilStyles.letterProject}>
         La versión de PHP que utilicé en este proyecto en un principio fue la 5, pero después la actualicé a la 7. Aunque los cambios fueron solamente algunos detalles menores como llamar a MySQL con <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.php.net/manual/es/class.mysqli.php"}
            target="_blank"
            rel="noopener noreferrer"
          > "mysqli"</a>.
        </p>
        
        <div className={`${ highlightPHPMyAdmin ? utilStyles.highlightElement : ""}`}>
          <p  className={utilStyles.letterProject}>
          La base de datos MySQL que usé para guardar los datos de usuario y todo lo referente a evaluaciones y alumnos usa como SGBD a <a 
              style={{ textDecoration: "none", color: "#0070f2"}}
              href={"https://www.phpmyadmin.net/"}
              target="_blank"
              rel="noopener noreferrer"
            > phpMyAdmin</a>. 
          </p>
        </div>

        <p  className={utilStyles.letterProject}>
          Como este fue mi primer proyecto, hay varias cosas que se podrían mejorar. Como por ejemplo, la duplicación de código, la falta de estructura en los archivos, mala indentación, etc.
        </p>
        
        <p  className={utilStyles.letterProject}>
          Además, en vez de usar solo PHP puro como en este proyecto, hubiera sido mucho mejor integrar frameworks como por ejemplo Laravel. Y de hecho he esado aprendiéndolo e implementándolo en este proyecto, mis progresos se pueden ver <a 
              style={{ textDecoration: "none", color: "#0070f2"}}
              href={"https://github.com/Desarrollos-Web-Urquiza/examin-laravel"}
              target="_blank"
              rel="noopener noreferrer"
            > aquí</a>. 
        </p>

        <p  className={utilStyles.letterProject}>
          Como se puede ver, hoy por hoy no cuento con un conocimiento muy avanzado en PHP. Pero conozco lo más básico del lenguaje y gracias a mi estudio de Laravel fui conociendo más y más.
        </p>

      </div>

     

      <div style={{  marginTop: 300}} />
          
      <Footer />     
     
    </div>
  )
}
