import Usuario from './Usuario-sugestao'
import Sugestoes from './Sugestoes'

export default function Sidebar(){
    return(
  <div class="sidebar">
    
    <Usuario user='catanacomics' name='Catana'/>
    <Sugestoes/>

    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>

    <div class="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  </div>)
}