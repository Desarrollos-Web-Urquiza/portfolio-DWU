import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const CardProject = withStyles((theme) => ({
    root: {
  
      backgroundColor: '#00a',
  
      '&:hover': {
        backgroundColor: '#00007e',
      },
    },
  }))(Card);

const ProjectContainer = ({title, src, alt, description, link}) => {
  
  return (
    <div>
      
      <br />
      <br />
      
      <CardProject className={`${utilStyles.cardProject}`}>
              
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
        
        <p style={{color: "#c3c3c3", marginLeft: 5, fontSize: 20, marginTop: 20 }}>{description} </p>
       
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