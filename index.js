// Detecting button press
var numberofDurmsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDurmsButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press
document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("cat_sounds/cat-meow-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("cat_sounds/cat-meow-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("cat_sounds/cat-meow-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("cat_sounds/cat-meow-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("cat_sounds/cat-meow-7.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("cat_sounds/angry-cat-meow-5.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("cat_sounds/funny-meow-6.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
};

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
