import utilStyles from '../styles/utils.module.css'

const Section = ({children, title, bg, bgMirror, style = {},  W7, className = ''}) => {
  
  let bgClassNames
  let h2Style
  
  if(!W7){

    bgClassNames = bg ? utilStyles.sectionBg : ``
    if(bgMirror) bgClassNames += ` ${utilStyles.sectionBgMirror}`
    h2Style = utilStyles.headingLg

  } else {

    bgClassNames = bg ? utilStyles.sectionBgW7 : ``
    if(bgMirror) bgClassNames += ` ${utilStyles.sectionBgMirrorW7}`
    h2Style = utilStyles.headingLgGrey
  }
  
  return (
    <div >
      <section 
        style={style}
        className={`${bgClassNames} ${utilStyles.mb20} ${utilStyles.headingMd} ${className}`}
      >
        {title && <h2 className={ ` ${h2Style}`}>{title}</h2>}
        {children}
      </section>
    </div>
  )
}
export default Section