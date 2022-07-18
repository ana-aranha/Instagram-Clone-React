import IonIconTemplade from './Ion-icons'
import React from "react";

const ionIconAcoes = ['chatbubble-outline','paper-plane-outline']

const postArr = [{user: 'meowed',userImg: 'assets/img/meowed.svg',postImg: 'assets/img/gato-telefone.svg',likedBy: 'respondeai',LikesNum: '101.523', icon: 'heart-outline' },{user: 'barked',userImg:'assets/img/barked.svg',postImg: 'assets/img/dog.svg',likedBy: 'adorable_animals',LikesNum: '99.159', icon: 'heart-outline'}]

export default function Posts(){
  return( postArr.map(objPost => 
      <PostTemplade user = {objPost.user} userImg={objPost.userImg} postImg={objPost.postImg} likedBy={objPost.likedBy} LikesNum={objPost.LikesNum} icon = {objPost.icon}/>))
}

function PostTemplade(props){
  { const [iconHeart,SetIconHeart] = React.useState(props
    .icon)
    return(
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImg}/>
          {props.user}
        </div>
        <div class="acoes">
          <IonIconTemplade name="ellipsis-horizontal"/>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.postImg} onDoubleClick={()=> {
            if(iconHeart === props.icon){
              SetIconHeart('heart')  
            }}}/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
          <ion-icon name = {iconHeart} onClick={()=> {
            if(iconHeart === props.icon){
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
            Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.LikesNum} pessoas</strong>
          </div>
        </div>
      </div>
  </div>)}
}
  
