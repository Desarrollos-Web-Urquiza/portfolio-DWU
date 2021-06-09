import React from 'react'
import styles from './footer.module.css'
import utilStyles from '../styles/utils.module.css'
import ProfileImage from '../components/profileImage'

const Footer = ({coditionalClass}) => {
  console.log(coditionalClass)
  return(
    <div className={coditionalClass}  >
      <div className={`${styles.footer}`} >
        <div  className={`${styles.footerContent} ${utilStyles.sectionFooter}`}>
          <div className={styles.container} >
            <div className={`${utilStyles.dF} ${utilStyles.mb20}`}>
              <div className={utilStyles.mr15}>
                <ProfileImage img={"/images/Logo.png"}/>
              </div>
              <div>
                <h3 className={utilStyles.headingLg}>Desarrollos Web Urquiza</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer