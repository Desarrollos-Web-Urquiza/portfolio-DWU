import utilStyles from '../styles/utils.module.css'

const EducationContainer = ({title, src, alt, description, link}) => {
  
  return (
    <div style={{ marginTop: "4.5rem"}}>
        
      <div  align= "center"  className={`${utilStyles.titleEducation}`}><b>Analista de Sistemas de Computación - Escuela Sup. N° 49 Cap. Justo José de Urquiza</b></div>
      
      <br />

      <a 
        style={{ textDecoration: "none"}}
        href={"https://www.terciariourquiza.edu.ar/"}
        target="_blank"
        rel="noopener noreferrer"
      >

        <img
          src="/images/AdSLogo.png"
          className={`${utilStyles.imgQR}`}
          alt={"Urquiza"}
        />

      </a>

      <p className={`${utilStyles.headingX3Education} `}>Cursé completa la carrera terciaria de Análisis de Sistemas. Ese fue mi primer contacto con la programación y la creación de páginas web.  </p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
            
      <div  align= "center"  className={`${utilStyles.titleEducation} ${utilStyles.titleNASA}`} ><b>Diseñador Web Site  -  Nasa Computación</b></div>
     
      <br />
     
      <a 
        style={{ textDecoration: "none"}}
        href={"https://www.nasacomputacion.com.ar/"}
        target="_blank"
        rel="noopener noreferrer"
      >

        <img
          src="/images/NASAcomputacion.png"
          className={`${utilStyles.imgQR}`}
          alt={"NASA"}
        />
     
      </a>
      
      <p className={`${utilStyles.headingX3Education}`}>Profundicé mis conocimientos haciendo un curso extra. Busqué mejorar mi frontend obteniendo habilidades de maquetación y diseño web. </p>

    </div>
  )
}

export default EducationContainer