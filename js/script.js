
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