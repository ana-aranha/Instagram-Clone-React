import IonIconTemplade from './Ion-icons'

const ionIconNavbarArr = ['paper-plane-outline','compass-outline','heart-outline','person-outline']

export default function Navbar(){
    return(
      <div class="navbar">
        <div class="container">
          <div class="logo">
            <IonIconTemplade name="logo-instagram"/>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div class="logo-mobile">
            <IonIconTemplade name="logo-instagram"/> 
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" /> 
          </div>
  
          <div class="icones"> 
            {ionIconNavbarArr.map(item => <IonIconTemplade name = {item}/>)} 
          </div>

          <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"/> 
          </div>
        </div>
      </div>
    )
}

 