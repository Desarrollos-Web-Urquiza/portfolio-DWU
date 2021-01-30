import Projects from '../data/projects'
import DevTools from '../data/devtools'

import TopBar from '../components/topBar.js'
import Title from "../components/title";
import ProfileImage from '../components/profileImage'
import utilStyles from '../styles/utils.module.css'
import Section from '../components/section'
import Drawer from '../components/drawer'
import ProjectContainer from '../components/projectContainer'
import DevToolContainer from '../components/DevToolContainer'

export default function Home(props) {
  
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

      <div  className={`${utilStyles.separatorSmall}`}/>

      <Section title="PROYECTOS PERSONALES" >      
      
        <div className={`${utilStyles.flexProject}`} align="center">
            
          {Projects.map(row=>
            
            <div style={{ flex: "auto" , flexWrap: "wrap", alignSelf: "space-around", marginRight:"15px"}} className={`${utilStyles.cardProjectMto}`}  >

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

        <div className={`${utilStyles.flexProject}`} >
        
          {DevTools.map(row=>
                
            <div style={{ flex: "auto" , flexWrap: "wrap", alignSelf: "space-around", marginRight:"15px"}} className={`${utilStyles.cardProjectMto}`}  >

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
      
      </Section>

      {/* <div  className={`${utilStyles.separator}`}/> */}

      <br />
      <br />
      <br />
      
      <Section title="EDUCACIÓN Y CERTIFICACIONES" >      
      
      </Section>      
     
    </div>
  )
}
