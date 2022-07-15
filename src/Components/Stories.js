import IonIconTemplade from './Ion-icons'

const storyUserArr = ['9gag','meowed','barked','nathanwpylestrangeplanet','wawawicomics','respondeai','filomoderna','memeriagourmet']

export default function Stories(){
    const path = 'assets/img/'
    const fileType = '.svg'
    return(
    <div class="stories">
        {storyUserArr.map(user => 
        <div class="story">
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
    </div>)
}