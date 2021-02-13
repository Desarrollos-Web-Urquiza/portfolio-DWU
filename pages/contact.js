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
      
      <div 
        
        align= "center" 
        className={`${utilStyles.header}`}
      
      >
        <ProfileImage img={"/images/Perfil.png"} />

        <h2>WERNER SCHYMALSKI</h2>   

      </div>

      <br />
      <br />
      <br />
     
      <Section title="CONTACTO" >     
        
        <div align="center">
          
          <div style={{ width:  "6.1em"}}>

            <a className={`${utilStyles.textInherit} `}
              style={{ textDecoration: "none"}}
              href="https://github.com/Desarrollos-Web-Urquiza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/logos/github.svg"
                className={`${utilStyles.imgContact}`}
                alt={"OkNube"}
              />
            </a>
            <p className={`${utilStyles.textContact}`}><b>GitHub</b></p>   
          </div>
          <a 
            style={{ textDecoration: "none"}}
            href="https://github.com/Desarrollos-Web-Urquiza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`${utilStyles.pContact}`}>https://github.com/Desarrollos-Web-Urquiza</p>          
          </a>
        </div>
        
        <br />
        <br />
      
      </Section>   
      
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <Footer />     
     
    </div>
  )
}
