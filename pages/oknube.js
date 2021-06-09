import React, {useEffect, useState} from 'react';
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

import TopBar from '../components/topBar.js'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import {Helmet} from "react-helmet";

import filterURL from "../lib/filterURL";

export default function Contact(props) {
  
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [highlightPolymer, setHighlightPolymer] = useState(false)
  const [highlightAWS, setHighlightAWS] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpened(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpened(false)
  }

  const restartHighlightElemnt = () =>{
    setHighlightPolymer(false)
    setHighlightAWS(false)
  }
  
  useEffect(() => {
    let highlightElemnt = filterURL(window.location.href)
    if(highlightElemnt == "Polymer")  {
      setHighlightPolymer(true)
    }
    if(highlightElemnt == "AWS")  {
      setHighlightAWS(true)
    }
  //   window.addEventListener('scroll', function() {
  //     // console.log(window.innerHeight)
  //     var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
  //       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
  //     console.log(limit)
  //     console.log(window.scrollY)
  //     // console.log(document.body.offsetHeight)
  //     // console.log(document.body.scrollHeight)
  //     if (window.scrollY >= 3358) {
  //       //  console.log("you're at the bottom of the page");
  //       //  restartHighlightElemnt()
  //        // Show loading spinner and make fetch request to api
  //     }
  //  });
	},[]);
 
  return (
     
    <div className={`${utilStyles.mainDivContainer}`} onClick={restartHighlightElemnt} >  
    	
      <Helmet>
        
        <title>DWU - OkNube</title>
                
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
          href={"https://oknube.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <ProfileImage img={"/images/logos/oknube.svg"}  /> */}
          <img
            src={"/images/logos/oknube.svg"}
            style={{  height: 125}}
            alt={"examin.ar"}
          />
        </a>
        
        <h1>OkNube</h1>   

      </div>

      <br />
      <br />
      <br />
      
      <div className={utilStyles.container}>
       
        <h2 align="center" className={utilStyles.subtitleProject} >Datos generales</h2>
               
        <p  className={utilStyles.letterProject}><b>Sitio web:</b></p>
        <a 
          style={{ textDecoration: "none"}}
          href={"https://oknube.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`${utilStyles.pContact} ${utilStyles.letterProject}`}>https://oknube.com/</p>
        </a>
        
        <p  className={utilStyles.letterProject}><b>Tecnologías usadas en el proyecto:  </b> 
          <i>
            Polymer, SPA, PWA, HTML, CSS, Stripo, 
            JavaScript, Node.js, Microservices, Express.js, JWT, Socket.io, Cloud Pub/Sub, Odoo, Firebase, MySQL, API-REST, Bash Script, 
            AWS, Docker, Nginx, etc.  
          </i>
        </p>
              
        <br />
      
        <p  className={utilStyles.letterProject}>
          Mi primer trabajo real como programador fue colaborando para un proyecto llamado <b>OkNube</b>.   
        </p>

        <p  className={utilStyles.letterProject}>
          OkNube es una startup que se propuso la creación de un sistema que te permita diseñar tu propia tienda online con la que puedas comercializar principalmente en la ciudad de San Juan, Argentina.
        </p>

        <p  className={utilStyles.letterProject}>
          Dentro de OkNube trabajé en un principio como un asistente en la parte del backend, pero al final terminé participando en muchos otros aspectos del proyecto.
        </p>

         <p  className={utilStyles.letterProject}>
          Si bien en el equipo de trabajo usábamos GitHub, lo que de verdad utilizábamos para mezclar el código era el servicio <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://aws.amazon.com/es/cloud9/"}
            target="_blank"
            rel="noopener noreferrer"
          > AWS Cloud9.</a> De esa forma trabajábamos juntos de manera remota estando a kilómetros de distancia.
        </p>
        
        <p  className={utilStyles.letterProject}>
          A continuación explicaré algunas de las tareas que me fueron asignadas dentro de este trabajo.
        </p>

        <br />

        <h2 align="center" className={utilStyles.subtitleProject} >Plantilla para e-mails</h2>

        <p  className={utilStyles.letterProject}>
          Se me pidió que diseñara un template para los correos electrónicos que recibirían los usuarios que soliciten tener una cuenta en el sistema.
        </p>

        <p  className={utilStyles.letterProject}>
          Me pidieron que lo haga con un pequeño framework  llamado <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://mjml.io/"}
            target="_blank"
            rel="noopener noreferrer"
          > MJML</a> que sirve para hacer ese tipo de cosas mendiante HTML y CSS.
        </p>

        <p  className={utilStyles.letterProject}>
          El resultado fue el siguiente
        </p>

        <br />
        
        <div align="center"> 
          <Link href= {"/images/e-mail-template.png"}>
            <a target="_blank" >
              <img
                src="/images/e-mail-template.png"
                className={utilStyles.projectVideo}
                style={{  maxWidth: 500, border: "solid", borderColor: "black" }}
                alt={"e-mail-template"}
              />
            </a>
          </Link>
        </div>
        
        <br />
        
        <div id="AWS" /> 

        <p  className={utilStyles.letterProject}>
          El código de MJML se puede ver <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://mjml.io/try-it-live/B1thzjtCV"}
            target="_blank"
            rel="noopener noreferrer"
          > aquí</a>.
        </p>
        <br />
        
        <h2 align="center" className={utilStyles.subtitleProject} >Subir archivos a AWS S3</h2>
      
        <div className={highlightAWS ? utilStyles.highlightElement : ""}>
          <p  className={utilStyles.letterProject}>
            Otra cosa que también me pidieron hacer, fue investigar cómo funciona el servicio de <a 
              style={{ textDecoration: "none", color: "#0070f2"}}
              href={"https://aws.amazon.com/es/s3/"}
              target="_blank"
              rel="noopener noreferrer"
            > AWS S3</a>.
          </p>
        </div>
        <p  className={utilStyles.letterProject}>
          Si bien hasta hoy desconozco los detalles de su integración completa, basado en información que encontré en internet hice una muy simple API que permitiría hacer copias de seguridad de nuestro sistema mediante el servicio que provee AWS S3.
        </p>

        <p  className={utilStyles.letterProject}>
          Al terminarla la subí a <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://github.com/Desarrollos-Web-Urquiza/Subir-Archivos-a-AWS-S3/blob/master/index.js"}
            target="_blank"
            rel="noopener noreferrer"
          > GitHub</a>, obviamente sin las credenciales correspondientes.
        </p>

        <br />
        
        <h2 align="center" className={utilStyles.subtitleProject} >Tareas de testeo y depuración de errores</h2>

        <p  className={utilStyles.letterProject}>
          También tuve la tarea de evaluar la experiencia de usuario del sistema, detectando errores y proponiendo posibles mejoras.
        </p>

        <p  className={utilStyles.letterProject}>
          Cuando detectaba un bug mi trabajo era tratar de arreglarlo en caso de que pudiera, y si no podía como mínimo debía realizar un informe del error como el que se ve en la siguiente imagen.
        </p>

        <br />
        
        
        <div align="center" style={{  marginBottom: 50}}> 
          <Link href= {"/images/error-oknube.png"}>
            <a target="_blank" >
              <img
                src="/images/error-oknube.png"
                className={utilStyles.projectVideo}
                style={{  maxWidth: 650, border: "solid", borderColor: "black" }}
                alt={"e-mail-template"}
              />
              <div id="Polymer" /> 
            </a>
          </Link>
        </div>
      
        <br />
        <div className={`${ highlightPolymer ? utilStyles.highlightElement : ""}`}>
          <p  className={utilStyles.letterProject}>
            Como se puede ver, en este caso el error tenía que ver con el componente <a 
              style={{ textDecoration: "none", color: "#0070f2"}}
              href={"https://www.webcomponents.org/element/@polymer/iron-icon"}
              target="_blank"
              rel="noopener noreferrer"
              > "iron-icon"</a> que era parte de un framework llamado   <a 
              style={{ textDecoration: "none", color: "#0070f2"}}
              href={"https://www.polymer-project.org/"}
              target="_blank"
              rel="noopener noreferrer"
            > Polymer</a>  que usábamos en el sistema para manejar el frontend.
          </p>
        </div>
                  
        <p  className={utilStyles.letterProject}>
          Si bien la mayoría de las veces me encargaba de la parte del backend, también aprendí algo muy básico de Polymer. Así que a veces aportaba pistas para resolver errores relacionados a eso.
        </p>

        <p  className={utilStyles.letterProject}>
          Pero igual no sería hasta mucho tiempo después cuando aprendí React que empecé a especializarme más en el frontend.
        </p>
        
        <br />
        
        <h2 align="center" className={utilStyles.subtitleProject}>Mis otros trabajos en OkNube</h2>

        <p  className={utilStyles.letterProject}>
          Además de los trabajos ya mencionados también tuve muchos otros más. Pero no es fácil explicarlos todos en esta página.
        </p>

        <p  className={utilStyles.letterProject}>
          De todas formas, mencionaré algunos de ellos de forma breve:
        </p>

        <p  className={utilStyles.letterProject}>
          <b>Documentar el sistema:</b> se me encargó la tarea de crear un "manual para el usuario". Tuve que explicar paso a paso cómo usar el sistema para despejar cualquier pregunta frecuente que el usuario pudiera llegar a tener.  
          <br />
          <br />
          <b>Trabajos de investigación:</b> en ocasiones tuve que investigar ciertas tecnologías web para copiar alguna de sus funcionalidades y que así podamos implementarlas en nuestro sistema. Otra investigación que me tocó hacer también fue la que le hice al funcionamiento de otras páginas competidoras dentro de nuestro rubro analizando algunos de sus detalles técnicos.   
          <br />
          <br />
          <b>Categorías de productos:</b> fue una ejecución de acciones recursivas que implicaban copiar algunos datos del frontend de otra página inspeccionando su código a fin de obtener determinada información sobre marcas, especialmente de motos y autos. Esto sirvió de fuente de inspiración para luego incluir esas marcas a la sección de “categorías” de productos de nuestro sitio web.
          <br />
          <br />
          <b>Implementación de Logs:</b> tuve que analizar los métodos (Post, Put, Delete, etc.) de ciertas APIs y en base a eso agregarle algunas funciones que se encargaban de registrar <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://es.wikipedia.org/wiki/Log_(inform%C3%A1tica)"}
            target="_blank"
            rel="noopener noreferrer"
          > logs</a>.
        </p>
    
      </div>

      <div style={{  marginTop: 300}} />
     
      <Footer coditionalClass={`${ highlightPolymer || highlightAWS ? utilStyles.footerConditional  : ""}`}  />     
           
    </div>
  )
}
