import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'

const VideoContainer = ({src, alt, size}) => {
  return (
    <div align="center">
      <div style={{  maxWidth: size }}>
        <Link href= {`/videos/good-quality/${alt}.mp4`}>
          <a target="_blank">
            <video 
              autoPlay
              muted
              loop
              src={src}
              className={utilStyles.projectVideo}
              style={{ border: "solid", borderColor: "black" }}
              alt={alt}
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
export default VideoContainer