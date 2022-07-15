const sidebarArr = [{user: 'bad.vibes.memes', reason: 'Segue você'},{user: 'chibirdart', reason: 'Segue você'},{user: 'razoesparaacreditar', reason: 'Novo no Instagram'},{user: 'adorable_animals', reason: 'Segue você'},{user: 'smallcutecats', reason: 'Segue você'}]
const path = 'assets/img/'
const fileType = '.svg' 

export default  function Sugestoes(){
    return(    
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
  
  </div>)
  }