const sidebarArr = [{user: 'bad.vibes.memes', reason: 'Segue você'},{user: 'chibirdart', reason: 'Segue você'},{user: 'razoesparaacreditar', reason: 'Novo no Instagram'},{user: 'adorable_animals', reason: 'Segue você'},{user: 'smallcutecats', reason: 'Segue você'}]

export default function Sidebar(){
    const path = 'assets/img/'
    const fileType = '.svg' 
    return(<div class="sidebar">
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        Catana
      </div>
    </div>

    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sidebarArr.map(sidebarObj => 
      <div class="sugestao">
        <div class="usuario">
          <img src={path+sidebarObj.user+fileType} />
          <div class="texto">
            <div class="nome">{sidebarObj.user}</div>
            <div class="razao">{sidebarObj.reason}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>)}

    </div>

    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>

    <div class="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  </div>)
}