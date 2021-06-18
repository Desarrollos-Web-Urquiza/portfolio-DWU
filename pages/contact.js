import contactData from '../data/contactData'

import utilStyles from '../styles/utils.module.css'

import TopBar from '../components/topBar.js'
import ProfileImage from '../components/profileImage'
import Section from '../components/section'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import {Helmet} from "react-helmet";

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

      <Helmet>
              
        <title>DWU - Contacto</title>
                
      </Helmet>		  
    
      <div 
          align= "center" 
          className={`${utilStyles.header}`}
        >
        <TopBar
          
          page={"contact"} 
          onOpenDrawer={handleDrawerOpen}
          history={props.history}
          
        />

        <Drawer

          onClose={handleDrawerClose}
          open={drawerOpened}
          history={props.history}
        
        />      
        
      
        <ProfileImage img={"/images/Perfil.png"} />

        <h2>WERNER SCHYMALSKI</h2>   
        
        <a 
          style={{ textDecoration: "none"}}
          href={"https://es.stackoverflow.com/users/212265/desarrollos-web-urquiza"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"https://es.stackoverflow.com/users/flair/212265.png"}
            alt={"Stack OverFlow ES profile"}
          />  
        </a>
        
      </div>

      <br />
      <br />
      <br />
     
      <Section title="CONTACTO" >     
        {
          contactData.map(row=>
            <div align="center">
              <div className={`${utilStyles[row.styleClass]} `} >
                <a className={`${utilStyles.textInherit} `}
                  style={{ textDecoration: "none"}}
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={row.img}
                    className={`${utilStyles.imgContact}`}
                    alt={row.alt}
                  />
                </a>
                <p className={`${utilStyles.textContact}`}><b>{row.title}</b></p>   
              </div>
              <a 
                style={{ textDecoration: "none"}}
                href={row.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={`${utilStyles.pContact}`}>{row.link}</p>          
              </a>
              <br />
            </div>
          )
        }
      
      </Section>   
      
      <div style={{  marginTop: 150}} />
      
      <Footer />     
     
    </div>
  )
}
