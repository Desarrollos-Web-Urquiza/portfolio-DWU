import React, {useEffect, useState} from 'react';
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

import TopBar from '../components/topBar.js'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import {Helmet} from "react-helmet";

import filterURL from "../lib/filterURL";

import Iframe from 'react-iframe'

export default function Contact(props) {
  
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [highlightPolymer, setHighlightPolymer] = useState(false)
  const [highlightAWS, setHighlightAWS] = useState(false)
  const [highlightMJML, setHighlightMJML] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpened(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpened(false)
  }

  const restartHighlightElemnt = () =>{
    setHighlightPolymer(false)
    setHighlightAWS(false)
    setHighlightMJML(false)
  }
  
  useEffect(() => {
    let highlightElemnt = filterURL(window.location.href)
    if(highlightElemnt == "Polymer")  {
      setHighlightPolymer(true)
    }
    if(highlightElemnt == "AWS")  {
      setHighlightAWS(true)
    }
    if(highlightElemnt == "MJML")  {
      setHighlightMJML(true)
    }
	},[]);
 
  return (
     
    <div className={`${utilStyles.mainDivContainer}`} onClick={restartHighlightElemnt} >  
    	
      <Helmet>
        
        <title>DWU - Electro 3</title>
                
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
          href={"http://www.electro3.com.ar/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <ProfileImage img={"/images/logos/oknube.svg"}  /> */}
          <img
            src={"https://media-exp1.licdn.com/dms/image/C4E0BAQHO_ykVLNqoXQ/company-logo_200_200/0/1618489974852?e=1648684800&v=beta&t=Eq0NBbMrbzZ9lfI2FuUgoV5IyKJrhoHjlguMYmXr4ng"}
            style={{  height: 125}}
            alt={"Electro 3"}
          />
        </a>
        
        <h1>Electro 3</h1>   

      </div>

      <br />
      <br />
      <br />
      
      <div className={utilStyles.container}>
       
        <h2 align="center" className={utilStyles.subtitleProject} >Datos generales</h2>
               
        <p  className={utilStyles.letterProject}><b>Sitio web:</b></p>
        <a 
          style={{ textDecoration: "none"}}
          href={"http://www.electro3.com.ar/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`${utilStyles.pContact} ${utilStyles.letterProject}`}>http://www.electro3.com.ar/</p>
        </a>
        
        <p  className={utilStyles.letterProject}><b>Tecnologías usadas en el proyecto:  </b> 
          <i>
            Vue, Vuex, Vue Test Utils, PrimeVue, JavaScript, Cypress, Jest, CSS, Node.js, Express.js, Cloud Firestore, PHP y Codeigniter 2  
          </i>
        </p>

        <p  className={utilStyles.letterProject}><b>LinkedIn:</b></p>
        <a 
          style={{ textDecoration: "none"}}
          href={"https://www.linkedin.com/company/electro3/mycompany/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`${utilStyles.pContact} ${utilStyles.letterProject}`}>Electro3</p>
        </a>
              
        <br />
      
        <p  className={utilStyles.letterProject}>
          Actualmente trabajo para la empresa llamada Electro3 que también es de San Juan (Argentina).  Esta empresa se dedica a varios rubros distintos entre lo cuales
          figuran el desarrollo de software.
        </p>    

        <p  className={utilStyles.letterProject}>
          Me encuentro participando en el desarrollo de una plataforma web para un organismo público de la provincia de San Juan. Esta plataforma sirve para realizar una
          serie de registros de tipo administrativo.
        </p>

        <p  className={utilStyles.letterProject}>
          En este proyecto adopto distintos cargos, por ejemplo trabajando como frontend o backend o también como QA, según la
          necesidad.      
        </p>

        <br />

        <h2 align="center" className={utilStyles.subtitleProject} >Frontend developer en Electro3</h2>

        <p  className={utilStyles.letterProject}>
          El principal stack que domino en la empresa Electro3 es el <b>frontend</b>.
        </p>
       
        <p  className={utilStyles.letterProject}>
          El frontend que manejo se desarrolla con el framework Vue. Cuando llegué a esta empresa lo desconocía completamente, ya que yo venía acostumbrado a trabajar con React y algo tocaba de oído con el framework  <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.desarrollos-web-urquiza.tk/oknube#Polymer"}
            target="_blank"
            rel="noopener noreferrer"
          > Polymer.</a>
        </p>

        <p  className={utilStyles.letterProject}>
          Sin embargo no fue un gran reto para mí aprender Vue, ya que React es bastante parecido. Además, ya veía bastante acostumbrado a trabajar con JavaScript. 
        </p>

        <p  className={utilStyles.letterProject}>
          Por lo que el proceso de adaptación fue bastante rápido, y ahí fue cuando llegué a aprender otra librería que era nueva para mí: <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.primefaces.org/primevue/showcase-v2/#/"}
            target="_blank"
            rel="noopener noreferrer"
          > PrimeVue.</a>
        </p>

        <p  className={utilStyles.letterProject}>
          Esta librería que está disponible tanto para React y Angular como para Vue, es bastante útil ya que aporta muchísimos componentes hechos y listos para customizar a nuestra comodidad.
        </p>

        <p  className={utilStyles.letterProject}>
          Una de las tareas que me asignaron con esta libería, fue traducir su componente calendario a español ya que este venía por defecto en inglés. Eso fue un desafío para mí, ya que mi poca experiencia con Vue me dificultó completar esta tarea. 
        </p>

        <p  className={utilStyles.letterProject}>
          Tenía que traducir lo siguiente: 
        </p>

        {/* <iframe src="https://codesandbox.io/embed/sharp-swartz-eqqgw?fontsize=14&hidenavigation=1&theme=dark"
          styles={{width: 400, height: 400}}
          title="sharp-swartz-eqqgw"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe> */}

        <Iframe 
          url={"https://codesandbox.io/embed/sharp-swartz-eqqgw?fontsize=14&hidenavigation=1&module=%2Fsrc%2FCalendarDemo.vue&theme=dark"}
          position="relative"
          width="100%"
          height="500px"
          id="myId"
          className="myClassname"
          styles={{height: "25px"}}
        />
        
        <br />   

        <p  className={utilStyles.letterProject}>
          Y como me costó lograrlo, publiqué la siguiente pregunta en <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://es.stackoverflow.com/questions/470035/c%c3%b3mo-poner-en-espa%c3%b1ol-el-calendario-de-primevue"}
            target="_blank"
            rel="noopener noreferrer"
          > StackOverflow.</a>        
        </p>
        
        <p  className={utilStyles.letterProject}>
          Finalmente gracias a una respuesta recibida en esa pregunta y también a bastante tiempo de investigación pude completar la que fue una de mis primeras tareas que tuve asignadas como frontend de esta empresa. 
        </p>

        <br />      

        <h2 align="center" className={utilStyles.subtitleProject} >Tareas de QA en Electro3</h2>  

        <p  className={utilStyles.letterProject}>
          Una de la cosas completamente nuevas que tuve que aprender en Electro3, fue hacer <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://es.wikipedia.org/wiki/Prueba_unitaria"}
            target="_blank"
            rel="noopener noreferrer"
          >unit testing.</a>
        </p>

        <p  className={utilStyles.letterProject}>
          En pricipio lo que querían era que lo hiciera con el backend escrito en PHP, pero esa fue una idea que finalmente se descartó. 
        </p>

        <p  className={utilStyles.letterProject}>
          Así que lo que terminamos testeando fueron nuestros componentes de Vue con la ayuda de librerías como  
          <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://vue-test-utils.vuejs.org/"}
            target="_blank"
            rel="noopener noreferrer"
          >  Vue Test Utils</a> y <a 
          style={{ textDecoration: "none", color: "#0070f2"}}
          href={"https://jestjs.io/"}
          target="_blank"
          rel="noopener noreferrer"
          >Jest.</a>

        </p>
        <p  className={utilStyles.letterProject}>
          Lamentablemente, dejamos de hacer pruebas unitarias debido a que esto retrasaba demasiado los tiempos del proyecto. Por lo que descontinuamos el uso de las librerías que tenían este propósito. 
        </p>

        <br />      
        
        <h2 align="center" className={utilStyles.subtitleProject} >Breves encuentros con el backend</h2>

        <p  className={utilStyles.letterProject}>
          En el proyecto de Electro3 con el que comencé, teníamos 2 versiones distintas de backend.
        </p>

        <p  className={utilStyles.letterProject}>
          Como en esta empresa se tomó un proyecto que venía hecho desde un principio, pero que era necesario rehacerlo, ya contaba con un backend armado. El mismo estaba creado con PHP usando el framework <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://codeigniter.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >  Codeigniter</a>.
        </p>
        
        <p  className={utilStyles.letterProject}>
          Pero al igual que el resto del proyecto, al backend debían hacérseles varios cambios. Así que para salir del paso logramos contar con un backend improvisado hecho en <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://nodejs.org/es/"}
            target="_blank"
            rel="noopener noreferrer"
          >  Node.js</a> con <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://expressjs.com/es/"}
            target="_blank"
            rel="noopener noreferrer"
          >  Express.js</a>  y usando como base de datos a <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://firebase.google.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >  Firebase</a>.
        </p>

        <p  className={utilStyles.letterProject}>
          Eso fue algo muy positivo para mí, porque ya tenía experiencia en esas tecnologías. Así que pude colaborar en la adaptación de ese backend a nuestro sistema, volviendo a armar APIs otra vez como solía hacer cuando trabaja en <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.desarrollos-web-urquiza.tk/oknube"}
            target="_blank"
            rel="noopener noreferrer"
          >  OkNube</a>.
        </p>

        <p  className={utilStyles.letterProject}>
          La API más destacada en la que colaboré fue una que utilizaba la librería <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.npmjs.com/package/multer"}
            target="_blank"
            rel="noopener noreferrer"
          >  Multer</a> para poder subir archivos que necesitábamos guardar en el servidor. Un compañero fue el que la desarrolló pero yo lo ayudé para hacerle algunos ajustes y que así podamos adaptarla mejor a nuestro frontend.
        </p>

        <p  className={utilStyles.letterProject}>
          Desde el frontend, mediante un endpoint le enviábamos los archivos al backend. Utilizámos el componente <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://www.npmjs.com/package/multer"}
            target="_blank"
            rel="noopener noreferrer"
          >  FileUpload</a> de PrimeVue para hacerlo.
        </p>

        <p  className={utilStyles.letterProject}>
          Al final, reemplazamos el backend por el anterior de Codeigniter y MySQL. Llegué a hacer un curso de este framework y practicarlo, pero al estar tan abocado al frontend no se han dado muchas oportunidades para experimentar con él en el proyecto.
        </p>
          
      </div>

      <div style={{  marginTop: 300}} />
     
      {/* <Footer coditionalClass={`${ highlightPolymer || highlightAWS ? utilStyles.footerConditional  : ""}`}  />      */}
      <Footer   />     
           
    </div>
  )
}