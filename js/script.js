
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


const rpsButton = document.querySelectorAll('#rps-button')
const playGame = document.querySelector('.play-game')
const parentAll = document.querySelectorAll('#parent-all')

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorButton = document.querySelector('.scissors')
const whoPick = document.querySelector('.who-picks')
const playAgainButton = document.querySelector('#play-again-btn')
const playAgainBtn = document.querySelector('#press-play-btn')
const computerPlayer = document.querySelector('#computer-choice')
const loseWin = document.querySelector('#lose-win')
const showScore = document.querySelector('.show-score')

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
  let num = Math.floor(Math.random() * 3)
  if (num === 0) {return 'rock'}
  else if (num === 1) {return 'paper'}
  else {return 'scissor'}
}

const chooseWinner = (choice) => {
   // 0 = rock, 1 = paper, 2 =scissor
  const myChoice = choice
  const computerChoice =  randomRPS()
  //console.log(`computer chose ${computerChoice}`)
  switch(computerChoice){
    case 'rock':
      if(myChoice === computerChoice){
        return 'draw'
      } else if (myChoice === 'paper'){
        return 'win'
      }
      else{
        return 'lose'
      }
    case 'paper':
      if(myChoice === computerChoice){
        return 'draw'
      } else if (myChoice === 'scissor'){
        return 'win'
      }
      else{
        return 'lose'
      }
    case 'scissor':
      if(myChoice === computerChoice){
        return 'draw'
      } else if (myChoice === 'rock'){
        return 'win'
      }
      else{
        return 'lose'
      }
    default:
      console.log('nothing')
  }
}

const updateDisplay = (myChoice, winner) =>{
  if(winner === 'draw'){
    computerPlayer.innerHTML = 'DRAW!'
  } else if(winner === 'win' && myChoice === 'rock'){
    scissorButton.classList.remove('not-picked')
    scissorButton.classList.add('winner')
    loseWin.innerHTML = 'YOU WIN'
  } else if(winner === 'win' && myChoice === 'paper'){
    rockButton.classList.remove('not-picked')
    rockButton.classList.add('winner')
    loseWin.innerHTML = 'YOU WIN'
  } else if(winner === 'win' && myChoice === 'scissor'){
    paperButton.classList.remove('not-picked')
    paperButton.classList.add('winner')
    loseWin.innerHTML = 'YOU WIN'
  } else if(winner === 'lose' && myChoice === 'rock'){
    paperButton.classList.remove('not-picked')
    paperButton.classList.add('winner')
    loseWin.innerHTML = 'YOU LOSE'
  } else if(winner === 'lose' && myChoice === 'paper'){
    scissorButton.classList.remove('not-picked')
    scissorButton.classList.add('winner')
    loseWin.innerHTML = 'YOU LOSE'
  } else if(winner === 'LOSE' && myChoice === 'scissor'){
    rockButton.classList.remove('not-picked')
    rockButton.classList.add('winner')
    loseWin.innerHTML = 'YOU LOSE'
  }
  playAgainButton.classList.add('yes-picked')
}

const toReset = document.querySelectorAll('.to-reset')
const resetPage = () => {
  toReset.forEach(n => n.classList.remove('yes-picked'))
  toReset.forEach(n => n.classList.remove('winner'))
  toReset.forEach(n => n.classList.remove('not-picked'))
  computerPlayer.innerHTML = ''
}


const updatePoints = (winner) =>{
  let points = showScore.innerHTML;
  if (winner === 'win'){
    points++;
    showScore.innerHTML = points
  }
}



//while (!rulesButtons.clicked){

  playAgainBtn.addEventListener('click', () =>{ 
    resetPage()
    console.log('butto presed')
  })

  rockButton.addEventListener('click', ()=>{
    rockButton.classList.add('yes-picked')
    selectItem();
    let winner = chooseWinner('rock')
    updateDisplay('rock', winner)
    updatePoints(winner)
    //playAgainBtn.addEventListener('click', resetPage())
  })


  paperButton.addEventListener('click', ()=>{
    paperButton.classList.add('yes-picked')
    selectItem()
    let winner = chooseWinner('paper')
    updateDisplay('paper', winner)
    updatePoints(winner)
  })


  scissorButton.addEventListener('click', ()=>{
    scissorButton.classList.add('yes-picked')
    selectItem()
    let winner = chooseWinner('scissor')
    updateDisplay('scissor', winner)
    updatePoints(winner)
  })
//}
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

