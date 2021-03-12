import utilStyles from '../styles/utils.module.css'

import TopBar from '../components/topBar.js'
import ProfileImage from '../components/profileImage'
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
          Mi primer trabajo real fue colaborando para un proyecto llamado OkNube.
        </p>

        <br />

        <h2 align="center">Mi trabajo en OkNube</h2>
        

      </div>

     

      <div style={{  marginTop: 300}} />
          
      <Footer />     
     
    </div>
  )
}
