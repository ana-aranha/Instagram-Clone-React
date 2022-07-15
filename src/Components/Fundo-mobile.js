import IonIconTemplade from './Ion-icons'

const ionIconMobileArr = ['home','search-outline','add-circle-outline','heart-outline','person-outline']

export default function FundoMobile(){
    return(
  <div class="fundo-mobile">
    {ionIconMobileArr.map(value => <IonIconTemplade name={value}/>)}
  </div>)
}