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
      
      <div  className={`${utilStyles.separator}`}/>

      <Footer />     
     
    </div>
  )
}
