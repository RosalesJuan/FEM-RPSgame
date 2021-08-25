
const showRules = document.querySelector('.rules-container')
const rulesButtons = document.querySelectorAll('#open-close-btn')

rulesButtons.forEach(button => {
  button.addEventListener('click', () =>{
    if (!showRules.classList.contains('active')){
      showRules.classList.add('active')
    } else{
      showRules.classList.remove('active')
    }
  })
})


//------------------------RPS BUTTONS---------------------------------


class rpsGame{
  constructor(){
    this.score = 0
    this.choice = undefined
    this.computerChoice = undefined
    // this.rock = 1
    // this.paper = 2
    // this.scissor = 3
  }
  randomGenerator() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) return 'rock'
    else if (num === 1) return 'paper'
    else return 'scissor'
  }
  
  updateDisplay(){
  }
  
  updateScore() {

  }

  playTheGame(string){
    // 0 = rock, 1 = paper, 2 =scissor
    //this.computerChoice =  this.randomGenerator()
    //this.choice = string
    console.log(this.computerChoice)
    switch(this.choice){
      case 0:
        if(this.choice === this.computerChoice){
          return 0
        } else if (this.computerChoice === 1){
          return 1
        }
        else{
          return 2
        }
        break;
      case 1:
        if(this.choice === this.computerChoice){
          console.log('draw')
        } else if (this.computerChoice === 2){
          console.log('lose')
        }
        else{
          console.log('win')
        }
        break;
      case 2:
        if(this.choice === this.computerChoice){
          console.log('draw')
        } else if (this.computerChoice === 0){
          console.log('loes')
        }
        else{
          console.log('win')
        }
        break;
      default:
        console.log('nothing')
    }
  }
}

const myGame = new rpsGame()
const rpsButton = document.querySelectorAll('#rps-button')
const playGame = document.querySelector('.play-game')

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorButton = document.querySelector('.scissors')
const whoPick = document.querySelector('.who-picks')
const playAgainButton = document.querySelector('#play-again-btn')


const selectItem = () =>{
  playGame.classList.add('yes-picked')
  whoPick.classList.add('yes-picked')
  if(rockButton.classList.contains('yes-picked')){
    paperButton.classList.add('not-picked')
    scissorButton.classList.add('not-picked')
  }else if(paperButton.classList.contains('yes-picked')){
    rockButton.classList.add('not-picked')
    scissorButton.classList.add('not-picked')
  }else{
    rockButton.classList.add('not-picked')
    paperButton.classList.add('not-picked')
  }
}

const randomRPS = () => {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) return 'rock'
  else if (num === 1) return 'paper'
  else return 'scissor'
}

const displayGame = (choice) => {
   // 0 = rock, 1 = paper, 2 =scissor
  const myChoice = choice
  const computerChoice =  randomRPS()
  //console.log(computerChoice)
  switch(myChoice){
    case 'rock':
      if(myChoice === computerChoice){
        return 'draw'
      } else if (computerChoice === 'paper'){
        return 'paper'
      }
      else{
        return 'win'
      }
      break;
    case 'paper':
      if(myChoice === computerChoice){
        return 'draw'
      } else if (computerChoice === 'scissor'){
        return 'scissor'
      }
      else{
        return 'win'
      }
      break;
    case 'scissor':
      if(myChoice === computerChoice){
        return 'draw'
      } else if (computerChoice === 'rock'){
        return 'rock'
      }
      else{
        return 'win'
      }
      break;
    default:
      console.log('nothing')
  }
}

const updateDisplay = (choice) =>{
  if(choice === 'scissor'){
    console.log('scissor win')
  }else if (choice === 'paper'){
    console.log('paper')
  }else{
    console.log('rock')
  }
}

rockButton.addEventListener('click', ()=>{
  rockButton.classList.add('yes-picked')
  selectItem()
  updateDisplay(displayGame('rock'))
})


paperButton.addEventListener('click', ()=>{
  paperButton.classList.add('yes-picked')
  selectItem()
  updateDisplay(displayGame('paper'))
})


scissorButton.addEventListener('click', ()=>{
  scissorButton.classList.add('yes-picked')
  selectItem()
  updateDisplay(displayGame('scissor'))
})

// rockButton.addEventListener('click', ()=>{
//    rockButton.classList.add('yes-picked')
//    paperButton.classList.add('not-picked')
//    scissorButton.classList.add('not-picked')
//    playGame.classList.add('yes-picked')
//    whoPick.classList.add('yes-picked')
//    //playAgainButton.classList.add('yes-picked')
//    if(myGame.playTheGame(0) === 1){
//      paperButton.classList.add('winner')
//    }
// })


// paperButton.addEventListener('click', ()=>{
//    rockButton.classList.add('not-picked')
//    paperButton.classList.add('yes-picked')
//    scissorButton.classList.add('not-picked')
//    playGame.classList.add('yes-picked')
//    whoPick.classList.add('yes-picked')
//    //playAgainButton.classList.add('yes-picked')
//    myGame.playTheGame(1)
// })


// scissorButton.addEventListener('click', ()=>{
//    rockButton.classList.add('not-picked')
//    paperButton.classList.add('not-picked')
//    scissorButton.classList.add('yes-picked')
//    playGame.classList.add('yes-picked')
//    whoPick.classList.add('yes-picked')
//    //playAgainButton.classList.add('yes-picked')
//    myGame.playTheGame(2)
// })

