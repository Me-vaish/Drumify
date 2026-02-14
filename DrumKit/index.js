var noOfDrumButtons = document.querySelectorAll(".drum").length;

//for detecting button press
for(var i = 0; i <noOfDrumButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var buttonAlphabet = this.innerHTML;
    makeSound(buttonAlphabet);
    buttonAnimate(buttonAlphabet);
})
}

//for keyboard press
document.addEventListener("keydown", function(event) {
  var keyBoardKeyPressed = event.key.toLowerCase();
  makeSound(keyBoardKeyPressed);
  buttonAnimate(keyBoardKeyPressed);
});


//for sound
function makeSound(key)
{
  switch(key)
  {
    case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
  }
}

//pressed key animation
function buttonAnimate(key)
{
    //for button pressed
    var buttonPressed = document.querySelector("."+key);
    buttonPressed.classList.add("pressed");

    //to retreive after few sec
    setTimeout(function ()
{
    buttonPressed.classList.remove("pressed");
}, 100);
}