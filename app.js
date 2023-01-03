let key = document.querySelectorAll('.key')
window.addEventListener('keydown',(e)=>{
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //stop the function
    audio.currentTime = 0; // everytyme whan clicked start from 0
    audio.play();
    key.classList.add('playing');
    // key.classList.remove('playing');
    // key.classList.toggle('playing');
})

const keys = document.querySelectorAll('.key')
keys.forEach((key)=>{
    key.addEventListener("transitionend",()=>{
    key.classList.remove('playing')
})});
window.onload=()=>{
    let container = document.querySelector('.container')
    let a = window.innerHeight//*100/window.innerHeight
    container.style.margin=`${a} auto`
}