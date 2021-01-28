import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { green, purple, grey } from '@material-ui/core/colors';

const CardDevTool = withStyles((theme) => ({
    root: {
  
      backgroundColor: grey[100],
  
      '&:hover': {
        backgroundColor: grey[200],
      },
    },
  }))(Card);

const ProjectContainer = ({title, icon, alt, description, link}) => {
  
  return (
    <div>
        
      <div className={`${utilStyles.mb20} ${utilStyles.col6} ${utilStyles.p03}`}>
        <a className={`${utilStyles.textInherit} ${utilStyles.dF}`}
          style={{ textDecoration: "none"}}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
        
          <img className={`${utilStyles.toolIcon} ${utilStyles.mr10}` } style={{ marginTop: 40  }} src={icon} alt=""/>
          <p style={{ color: "#c3c3c3", fontSize: 30  }}>{title}</p>
        
        </a>
        
        {description && <div className={utilStyles.caption} style={{ color: "#c3c3c3", fontSize: 22, marginTop: -15   }}>{description}</div>}
      
      </div>

    </div>
  )
}
export default ProjectContainer