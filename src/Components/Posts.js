import IonIconTemplade from './Ion-icons'

const postArr = [{user: 'meowed',postImg: 'assets/img/gato-telefone.svg',likedBy: 'respondeai',LikesNum: '101.523'},{user: 'barked',postImg: 'assets/img/dog.svg',likedBy: 'adorable_animals',LikesNum: '99.159'}]

const ionIconAcoes = ['heart-outline','chatbubble-outline','paper-plane-outline']

export default function(){
    const path = 'assets/img/'
    const fileType = '.svg'
    return( postArr.map(objPost => 
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={path+objPost.user+fileType}/>
                {objPost.user}
              </div>
              <div class="acoes">
                <IonIconTemplade name="ellipsis-horizontal"/>
              </div>
            </div>
    
            <div class="conteudo">
              <img src={objPost.postImg} />
            </div>
    
            <div class="fundo">
              <div class="acoes">
                <div>
                  {ionIconAcoes.map(item => <IonIconTemplade name={item}/>)}
                </div>
                <div>
                  <IonIconTemplade name="bookmark-outline"/>
                </div>
              </div>
    
              <div class="curtidas">
                <img src="assets/img/respondeai.svg" />
                <div class="texto">
                  Curtido por <strong>{objPost.likedBy}</strong> e <strong>outras {objPost.LikesNum} pessoas</strong>
                </div>
              </div>
            </div>
        </div>))
}