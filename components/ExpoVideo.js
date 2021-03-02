import utilStyles from '../styles/utils.module.css'

const ExpoVideo = ({ src, alt }) => {
  return (
    <div align="center">
      <div 
        className={utilStyles.expolearningVideoRotate} 
        style={{ marginTop: 150}}
      >
        <div style={{  maxWidth: 700 }}>
          <video 
            autoPlay
            muted
            loop
            src={src}
            className={utilStyles.expolearningVideoSize}
            alt={alt}
          />
        </div>
      </div>
   
      <div style={{  marginTop: 230}} />
   
    </div>
  )
}
export default ExpoVideo