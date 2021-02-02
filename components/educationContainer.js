import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const EducationContainer = ({title, src, alt, description, link}) => {
  
  return (
    <div >
        
      <div  align= "center"  className={`${utilStyles.titleEducation}`}><b>Analista de Sistemas de Computación - Escuela Sup. N° 49 Cap. Justo José de Urquiza</b></div>
      
      <br />

      <img
        src="/images/AdSLogo.png"
        className={`${utilStyles.imgQR}`}
        alt={"Urq"}
      />

      <p className={`${utilStyles.headingX3Education}`}>Cursé en 3 años la carrera terciaria de Análisis de Sistemas y ese fue mi primer contacto con la progrmación.   </p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div  align= "center"  className={`${utilStyles.titleEducation}`}><b>Diseñador Web Site  -  NASA Computación</b></div>
     
      <br />
     
      <img
        src="/images/NASAcomputacion.png"
        className={`${utilStyles.imgQR}`}
        alt={"Urq"}
      />

      <p className={`${utilStyles.headingX3Education}`}>Profundicé mis conocimientos haciendo un curso extra. Busqué mejorar mi frontend y obtener habilidades de maquetación y diseño web. </p>


    </div>
  )
}

export default EducationContainer