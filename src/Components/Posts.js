import IonIconTemplade from './Ion-icons'
import React from "react";

const ionIconAcoes = ['chatbubble-outline','paper-plane-outline']

const postArr = [{user: 'meowed',postImg: 'assets/img/gato-telefone.svg',likedBy: 'respondeai',LikesNum: '101.523', icon: 'heart-outline' },{user: 'barked',postImg: 'assets/img/dog.svg',likedBy: 'adorable_animals',LikesNum: '99.159', icon: 'heart-outline'}]
  
  export default function(){
    const path = 'assets/img/'
    const fileType = '.svg'
    return( postArr.map(objPost => 
        { const [iconHeart,SetIconHeart] = React.useState(objPost
          .icon)
          return(<div class="post">
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
              <img src={objPost.postImg} onDoubleClick={()=> {
                  if(iconHeart === objPost.icon){
                    SetIconHeart('heart')  
                  }}}/>
            </div>
    
            <div class="fundo">
              <div class="acoes">
                <div>
                <ion-icon name = {iconHeart} onClick={()=> {
                  if(iconHeart === objPost.icon){
                    SetIconHeart('heart')  
                  } else{SetIconHeart('heart-outline')}
                  }}></ion-icon>
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
        </div>)}))
}