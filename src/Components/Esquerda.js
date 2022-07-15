import IonIconTemplade from './Ion-icons'

const storyUserArr = ['9gag','meowed','barked','nathanwpylestrangeplanet','wawawicomics','respondeai','filomoderna','memeriagourmet']

const postArr = [{user: 'meowed',postImg: 'assets/img/gato-telefone.svg',likedBy: 'respondeai',LikesNum: '101.523'},{user: 'barked',postImg: 'assets/img/dog.svg',likedBy: 'adorable_animals',LikesNum: '99.159'}]

const ionIconAcoes = ['heart-outline','chatbubble-outline','paper-plane-outline']

export default function Esquerda(){
    const path = 'assets/img/'
    const fileType = '.svg' 
    return (<div class="esquerda">
    <div class="stories">
      {storyUserArr.map(user => <div class="story">
        <div class="imagem">
          <img src= {path+user+fileType} />
        </div>
        <div class="usuario">
          {user}
        </div>
      </div>)}

      <div class="setinha">
        <IonIconTemplade name="chevron-forward-circle"/>
      </div>
    </div>

    <div class="posts">
   { postArr.map(objPost => 
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
    </div>
      )}
  </div>
</div>)
}