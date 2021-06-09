import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

import Projects from '../data/projects'
import DevTools from '../data/devtools'

import utilStyles from '../styles/utils.module.css'

import TopBar from '../components/topBar.js'
import ProfileImage from '../components/profileImage'
import Title from "../components/title";
import Section from '../components/section'
import Drawer from '../components/drawer'
import ProjectContainer from '../components/projectContainer'
import DevToolContainer from '../components/DevToolContainer'
import EducationContainer from '../components/educationContainer'
import WorkContainer from '../components/workContainer'
import Footer from '../components/footer'

import filterURL from "../lib/filterURL";
import { ContactlessOutlined } from '@material-ui/icons';

export default function Home(props) {
  
  const [drawerOpened, setDrawerOpened] = useState(false)

  const [anchorPoint, setAnchorPoint] = useState(false)

  // const [handlerURL, setHandlerURL] = useState(window.location.href)

  const handleDrawerOpen = () => {
  
    setDrawerOpened(true);
  
  };

  const handleDrawerClose = () => {

    setDrawerOpened(false)

  }

  const verifyExitsAnchorPoint = () => {
    console.log("Se llama a verifyExitsAnchorPoint")
    let exitsAnchorPoint = filterURL(window.location.href)
    if(exitsAnchorPoint)  {
      setAnchorPoint(true)//footer patch
    }
  }

  useEffect(() => {
    verifyExitsAnchorPoint()
  },[anchorPoint]);
  
  return (
     
    <div className={`${utilStyles.mainDivContainer}`}  >    
     
      <div 
        
        align= "center" 
        className={`${utilStyles.header}`}
      
      >
        
        <div onClick={verifyExitsAnchorPoint}>
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
        </div>
                    
        <ProfileImage img={"/images/Perfil.png"} />

        <Title>WERNER SCHYMALSKI</Title>   

        <p style={{ fontFamily: "var(--fontPersonalized)" }} className={`${utilStyles.headingMd}`}>Programador web de Argentina</p>
      
      </div>        

      <Section title="" bg>
        
        <div align="center">
          
          <div className={`${utilStyles.blueScreen}`} align="left" >

            <p className={`${utilStyles.headingXl}`}>:)</p>
            
            <br />
            <br />
            
            <p className={`${utilStyles.headingX2}`}>Soy un programador y diseñador web con mucha curiosidad y ganas de aprender cosas nuevas. </p>
            
            <br />
            <br />
            
            <p className={`${utilStyles.headingX2}`}>Día a día busco conocer más y más información del backend y frontend de las páginas web y me gusta crear proyectos personales con lo que aprendo. A lo largo del tiempo he experimentado con varias tecnologías y lenguajes distintos y si bien algunos me gustan más que otros, no me caso con ninguno.</p>
            
            <br />
            <br /> 

            <CountUp
              end={100}
              duration={45}
              className={`${utilStyles.headingX2}`}
              style={{float: "left"}}
            />
            
            <p className={`${utilStyles.headingX2}`}>% curiosidad</p>
            
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
            
          </div>
        
        </div>

      </Section>
           
      <div className={`${utilStyles.separatorSmall}`}/>
     
      <div id="projects" />
          
      <Section title="PROYECTOS PERSONALES" mTop={315} >      
      
        <div  className={`${utilStyles.flexProject}`} align="center">
            
          {Projects.map(row=>
            
            <div style={{ flex: "auto" , flexWrap: "wrap"}} className={`${utilStyles.cardProjectMto}`}  >
              
              <ProjectContainer

                title={row.title}
                src={row.src}
                alt={row.alt}
                description={row.description}
                link={row.link}
                    
              />
            
            </div>  
                        
          )}        
        
        </div>
      
      </Section>   
      
      <div  className={`${utilStyles.separatorSmall}`}/>

      <Section title="LENGUAJES Y TECNOLOGÍAS QUE USO" bg bgMirror W7> 
        
        <div align="center">
          
          <div className={`${utilStyles.flexProject}`} style={{ maxWidth: 2180}}>
          
            {DevTools.map(row=>
                  
              <div style={{ flex: "auto" , flexWrap: "wrap", alignSelf: "space-around", marginRight:"15px" }} className={`${utilStyles.cardProjectMto}`}  >

                <DevToolContainer

                  title={row.title}
                  icon={row.icon}
                  alt={row.alt}
                  link={row.link}
                  description={row.description}
                                      
                />
              
              </div>   
                              
            )}
              
          </div>          
        
        </div>          
      
      </Section>

      <Section title="EDUCACIÓN Y CERTIFICACIONES" mTop={90}>      

        <EducationContainer />

      </Section>      

      <div  className={`${utilStyles.separator}`}/>
      
      <div id="experience" />
      
      <Section title="EXPERIENCIA LABORAL" bg W7 mTop={"15em"}>      
        
        <WorkContainer /> 
       
      </Section> 

      <div  className={`${utilStyles.separatorSmall}`}/>

      <Footer coditionalClass={`${ anchorPoint ? utilStyles.footerConditional  : ""}`} />     
     
    </div>
  )
}
