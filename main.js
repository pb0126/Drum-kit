var keynote='';

// Click Detection
function keyPress(keynote){
  playSound(keynote);
  animateButton(keynote);
} 
// Detect keyboard press

document.addEventListener("keydown", function(event){
  playSound(event.key);
  animateButton(event.key);
})
// Play sounds
function playSound(keypress){
  switch(keypress){
    case 'w': 
      var sound = new Audio("assets/sounds/tom-1.mp3");
      sound.play();
    break;
    case 'a':
      var sound = new Audio("assets/sounds/tom-2.mp3");
      sound.play();
    break;
    case 's':
      var sound = new Audio("assets/sounds/tom-3.mp3");
      sound.play();
    break;
    case 'd':
      var sound = new Audio("assets/sounds/tom-4.mp3");
      sound.play();
    break;
    case 'j':
      var sound = new Audio("assets/sounds/snare.mp3");
      sound.play();
    break;
    case 'k':
      var sound = new Audio("assets/sounds/crash.mp3");
      sound.play();
    break;
    case 'l':
      var sound = new Audio("assets/sounds/kick-bass.mp3");
      sound.play();
    break;

    default:
      alert('Invalid Key Pressed ' + keypress);
  }
}
// Animation in buttons
function animateButton(input){
  var activeClass=document.querySelector("." +input);
  activeClass.classList.add("pressed");
  setTimeout(()=>{
    activeClass.classList.remove("pressed");
  },100);
  
}