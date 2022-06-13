function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default:
      console.log(this.innerHTML);

  }
}

var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
}

for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("keypress", function(event) {
    var buttonPress = event.key;

    makeSound(buttonPress);
    buttonAnimation(buttonPress);
  })
}

function buttonAnimation(currentKey) {
  var activateButton = document.querySelector("." + currentKey);

  activateButton.classList.add("pressed");

  setTimeout(function() {
    activateButton.classList.remove("pressed")
  }, 100)
}

// document.addEventListener("keypress", function(event){
//   console.log(event.key)
// })

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
