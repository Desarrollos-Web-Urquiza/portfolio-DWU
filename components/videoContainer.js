import utilStyles from '../styles/utils.module.css'

const VideoContainer = ({src, alt, size}) => {
  return (
    <div align="center">
      <div style={{  maxWidth: size }}>
        <video 
          autoPlay
          muted
          loop
          src={src}
          className={utilStyles.projectVideo}
          alt={alt}
        />
      </div>
    </div>
  )
}
export default VideoContainer