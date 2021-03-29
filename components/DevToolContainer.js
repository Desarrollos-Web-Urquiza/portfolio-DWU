import utilStyles from '../styles/utils.module.css'

const DevToolContainer = ({title, icon, alt, description, link}) => {
  
  return (
    <div>
        
      <div className={`${utilStyles.mb20} ${utilStyles.col6} ${utilStyles.p03}`}>
        
        <a className={`${utilStyles.textInherit} ${utilStyles.dF}`}
          style={{ textDecoration: "none"}}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
        
          <img className={`${utilStyles.toolIcon} ${utilStyles.mr10}` } style={{ marginTop: 40  }} src={icon} alt={alt}/>
          <p style={{ color: "#c3c3c3", fontSize: 30  }}>{title}</p>
        
        </a>
        
        <div align="left">
          {description && <div className={utilStyles.caption} style={{ color: "#c3c3c3", fontSize: 22, marginTop: -15   }}>{description}</div>}
        </div>

      </div>

    </div>
  )
}
export default DevToolContainer