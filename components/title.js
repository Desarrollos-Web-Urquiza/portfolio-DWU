import utilStyles from '../styles/utils.module.css'

export default function Title({  children    }) {
  return (
    <div>

     <h1 className={utilStyles.heading2Xl}>{children}</h1>
     
    </div>
  )
}