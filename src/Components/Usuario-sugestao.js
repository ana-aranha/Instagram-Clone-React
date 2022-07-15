export default function Usuario(props){
    return(<div class="usuario">
    <img src="assets/img/catanacomics.svg" />
    <div class="texto">
      <strong>{props.user}</strong>
      {props.name}
    </div>
  </div>
  )
  }