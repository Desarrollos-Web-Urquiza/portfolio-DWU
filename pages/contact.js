import contactData from '../data/contactData'

import utilStyles from '../styles/utils.module.css'

import TopBar from '../components/topBar.js'
import ProfileImage from '../components/profileImage'
import Section from '../components/section'
import Drawer from '../components/drawer'
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
        {contactData.map(row=>
          <div align="center">
            <div style={{ width:  "7em", marginTop: 25}}>
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
          
        )}
      
      </Section>   
      
      <div style={{  marginTop: 150}} />
      
      <Footer />     
     
    </div>
  )
}
