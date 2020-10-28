const bodyElement = document.querySelector('body');
const switchElement = document.querySelector('.switch');
const modeElement = document.querySelector('.mode');
const navElement = document.querySelector('nav');
const mainElement = document.querySelector('.main');

let lightMode = true;

function render(){
  if(!lightMode){
    bodyElement.classList.add('dark-body')
    navElement.classList.add('dark-nav')
    modeElement.classList.add('dark')
    switchElement.classList.add('dark-switch')
    mainElement.classList.add('dark-main')
    modeElement.textContent = 'D'
  }else{
    bodyElement.classList.remove('dark-body')
    navElement.classList.remove('dark-nav')
    modeElement.classList.remove('dark')
    switchElement.classList.remove('dark-switch')
    mainElement.classList.remove('dark-main')
    modeElement.textContent = 'L'
  }
}
switchElement.addEventListener('click', (e) => {
  lightMode = !lightMode;

  render()
})