import React from 'react'
import styles from './footer.module.css'
import utilStyles from '../styles/utils.module.css'
import ProfileImage from '../components/profileImage'

const Footer = ({profileImage, contactLink, name}) => {
  
  return(
    <div className={`${styles.footer}`}>
      <div className={`${styles.footerContent} ${utilStyles.sectionBg}`}>
        <div className={styles.container}>
          
          <div className={`${utilStyles.dF} ${utilStyles.mb20}`}>
            <div className={utilStyles.mr15}>
              <ProfileImage img={"/images/Logo.png"}/>
            </div>
            <div>
              <h3 className={utilStyles.headingLg} style={{lineHeight: 1}}>Desarrollos Web Urquiza</h3>
              {/* <p style={{lineHeight: 0, }}>Programador web de Argentina</p> */}
              {contactLink}
            </div>
          </div>

          {/* <a 
            className={`${utilStyles.textInherit} ${utilStyles.dF} ${utilStyles.jCCenter} ${utilStyles.aICenter}`}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'black', opacity: 0.5}}
          >
            Powered by{' '}
            <img src="/images/logos/vercel.svg" alt="Vercel Logo" className={styles.footerLogo} />
          </a> */}
        </div>
      </div>
    </div>
  )
}
export default Footer