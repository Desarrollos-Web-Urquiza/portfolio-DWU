import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

import TopBar from '../components/topBar.js'
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
       
        <h2 align="center">Datos generales</h2>
        
        <p  className={utilStyles.letterProject}>
          <b>Sitio web:     </b>  
          <a 
            style={{ textDecoration: "none"}}
            href={"https://oknube.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`${utilStyles.pContact}`}>https://oknube.com/</p>
          </a>
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
          > AWS Cloud9.</a> De esa forma trabajábamos de manera remota estando a kilómetros de distancia.
        </p>

        <p  className={utilStyles.letterProject}>
          A continuación explicaré algunas de las tareas que me fueron asignadas dentro de este trabajo.
        </p>

        <br />

        <h2 align="center">Plantilla para e-mails</h2>

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
        
        <p  className={utilStyles.letterProject}>
          El código de MJML se puede ver <a 
            style={{ textDecoration: "none", color: "#0070f2"}}
            href={"https://mjml.io/try-it-live/B1thzjtCV"}
            target="_blank"
            rel="noopener noreferrer"
          > aquí</a>.
        </p>

        <br />
        
        {/* <h2 align="center">Subir archivos a AWS S3</h2>

        <p  className={utilStyles.letterProject}>
          Otra cosa que también me pidieron hacer, es investigar cómo funciona el servicio de AWS S3
        </p> */}

      </div>

     

      <div style={{  marginTop: 300}} />
          
      <Footer />     
     
    </div>
  )
}
