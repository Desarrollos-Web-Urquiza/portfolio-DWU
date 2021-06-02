export default function filterURL(URL) {
  let semiParams = URL.split('/')
  semiParams =  semiParams[3]
  semiParams = semiParams.split('#')
  let paramsFinished = semiParams[1]
  
  return (paramsFinished)
}