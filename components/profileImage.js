import React from 'react'
import styles from './profileImage.module.css'
import utilStyles from '../styles/utils.module.css'

const ProfileImage = ({big = false, name, img}) => {
  const className = big ? 'profileImageBig' : 'profileImage'
  return (
    <img
      src={img}
      className={`${styles[className]} ${utilStyles.borderCircle}`}
      alt={name}
    />
  )
}
export default ProfileImage