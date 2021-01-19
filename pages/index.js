import Head from 'next/head'

import TopBar from '../components/topBar.js'
import Title from "../components/title";
import ProfileImage from '../components/profileImage'
import utilStyles from '../styles/utils.module.css'
import Section from '../components/section'
import Drawer from '../components/drawer'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

const CardProject = withStyles((theme) => ({
  root: {

    backgroundColor: '#00a',

    '&:hover': {
      backgroundColor: '#00a',
    },
  },
}))(Card);

export default function Home(props) {
  
  const [drawerOpened, setDrawerOpened] = React.useState(false)

  const handleDrawerOpen = () => {
  
    setDrawerOpened(true);
  
  };

  const handleDrawerClose = () => {

    setDrawerOpened(false)

  }
  
  return (
     
    <div>    
      
      <Head>
        
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      </Head>

      <style jsx global>
      
        {`
          body {
            overflow-x: hidden;            
          }
        `}
      
      </style>
     
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
              
        <ProfileImage />

        <Title>WERNER SCHYMALSKI</Title>   

        <p  className={`${utilStyles.headingMd}`}>Programador web de Argentina</p>
      
      </div>        

      <br />
      <br />
      <br />
      <br />
      <br />
    
      <Section title="" bg>
        
        <p className={`${utilStyles.headingXl}`}>:)</p>
        
        <br />
        <br />
        
        <p className={`${utilStyles.headingX2}`}>Soy un programador y diseñador web con mucha curiosidad y ganas de aprender cosas nuevas. </p>
        
        <br />
        <br />
        
        <p className={`${utilStyles.headingX2}`}>Día a día busco conocer más y más cosas del backend y frontend de las páginas web y me gusta crear proyectos personales con lo que aprendo. A lo largo del tiempo he experimentado con varias tecnologías y lenguajes distintos y si bien algunos me gustan más que otros, no me caso con ninguno.</p>
        
        <br />
        <br />
        
        <img
          src="/images/QR GitHub.png"
          className={`${utilStyles.imgQR}`}
          alt={"QR"}
        />
        
        <p className={`${utilStyles.headingX3}`}>Para obtener más información de este programador y ver todos sus proyectos, visita
        
          <br />
          <br />
            
          <a className={`${utilStyles.headingX3}`} target="_blank" href= "https://github.com/Desarrollos-Web-Urquiza">https://github.com/Desarrollos-Web-Urquiza</a>
        
        </p>
            
      </Section>

    <div  className={`${utilStyles.separator}`}/>

      <Section title="MIS PROYECTOS PERSONALES" > 
      
        <div className={`${utilStyles.flexProject}`} align="center">


          <div style={{ flex: "auto" , flexWrap: "wrap", alignSelf: "space-around", marginRight:"15px"}} className={`${utilStyles.cardProjectMto}`}  >

            <CardProject className={`${utilStyles.cardProject}`}>
            
              <div align="center">
              
                <div className={`${utilStyles.cardProjectHeader}`}>     
                
                  {/* <Typography variant="h4"  align="center">Black Telephone</Typography> */}
                  <h1  align="center">Examin.ar</h1>
                
                </div>
              
              </div>
            
              <div align="center">
                
                <img
                  src="/images/Examin.ar.png"
                  className={`${utilStyles.imgProject}`}
                  alt={"BlackTelephone"}
                />
              
              </div>

              <p style={{color: "#c3c3c3", marginLeft: 20, fontSize: 20, marginTop: 20 }}>Mis primeros pasos como programador. Este proyecto lo comencé a desarrollar mientras cursaba mi escuela terciaria</p>
          
            </CardProject >
          
          </div>    
          
          <br />
          <br />
          <br />
          
          <div style={{ flex: "auto" , flexWrap: "wrap", alignSelf: "space-around", marginRight:"15px"}} className={`${utilStyles.cardProjectMto}`}>          

            <CardProject className={`${utilStyles.cardProject}`}>
            
              <div align="center">
              
                <div className={`${utilStyles.cardProjectHeader}`}>     
                
                  {/* <Typography variant="h4"  align="center">Black Telephone</Typography> */}
                  <h1  align="center">Black Telephone</h1>
                
                </div>
              
              </div>
            
              <div align="center">
                
                <img
                  src="/images/BlackTelephone.png"
                  className={`${utilStyles.imgProject}`}
                  alt={"BlackTelephone"}
                />
              
              </div>

              <p style={{color: "#c3c3c3", marginLeft: 20, fontSize: 20, marginTop: 20 }}>Proyecto en el que busqué experimentar con React y también con JavaScript en el lado del frontend </p>
          
            </CardProject >
          
          </div>
          
          <br />
          <br />
          <br />
          
          <div style={{ flex: "auto" , flexWrap: "wrap", alignSelf: "space-around", marginRight:"15px"}} className={`${utilStyles.cardProjectMto}`}>

            <CardProject className={`${utilStyles.cardProject}`}>
            
              <div align="center">
              
                <div className={`${utilStyles.cardProjectHeader}`}>     
                
                  {/* <Typography variant="h4"  align="center">Black Telephone</Typography> */}
                  <h1  align="center">Expolearning</h1>
                
                </div>
              
              </div>
            
              <div align="center">
                
                <img
                  src="/images/expolearning.png"
                  className={`${utilStyles.imgProject}`}
                  alt={"BlackTelephone"}
                />
              
              </div>

              <p style={{color: "#c3c3c3", marginLeft: 20, fontSize: 20, marginTop: 20 }}>Mi primera y única experiencia en el mundo del desarrollo de aplicaciones híbridas para dispositivos móviles 
              
              con React Native  </p>
          
            </CardProject >
          
          </div>
        
        </div>
      </Section>   
      
      <div  className={`${utilStyles.separator}`}/>

      <Section title="Hola Mundo" bg bgMirror> 
      
      <p> Hola Mundo </p>
    
    </Section>   
     
    </div>
  )
}