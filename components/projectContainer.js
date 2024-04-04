import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const CardProject = withStyles((theme) => ({
    root: {
      
      backgroundColor: 'rgb(0,0,170, 1)',
  
      '&:hover': {
        backgroundColor: 'rgb(0,0,126, 1)',
      },
    },
  }))(Card);

const ProjectContainer = ({title, src, alt, description, link}) => {
  
  return (
    <div>
      
      <br />
      <br />
      
      <CardProject className={utilStyles.cardProject} style={{ backgroundColor: "#c3c3c3" }}>
              
        <div align="center">
          
          <div className={`${utilStyles.cardProjectHeader}`}>     
          
            <h1  align="center">{title}</h1>
          
          </div>
        
        </div>
        
        <div align="center">
            
          <img
            src={src}
            className={`${utilStyles.imgProject}`}
            alt={alt}
          />
      
        </div>
        
        <div style={{ height:  150 }}>
          <p style={{color: 'rgb(0,0,170, 1)', marginLeft: 5, fontSize: 20, marginTop: 20 }}>{description} </p>
        </div>
        
        <div style={{float: "right", marginRight: 10, marginTop: 10,}}>
          
        {console.log(`/${link}`)}
        
        <Link href= {`/${link}`}>
        
          <Button variant="contained" color="default" >
            +MÁS INFO.
          </Button>
        
        </Link>

        </div>
      
      </CardProject >

    </div>
  )
}
export default ProjectContainer