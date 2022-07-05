// alert("Aditya here!!!");

for (var i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {


    var choice = this.innerHTML;


    console.log(choice);

    selectSoundFromCharacter(choice);
    buttonAnimation(choice);


  });

}


  function selectSoundFromCharacter(character) {

    var audio;

    switch (character) {
      case 'w':
        audio = new Audio("sounds/tom-1.mp3");
        break;

      case 'a':
        audio = new Audio("sounds/tom-2.mp3");
        break;

      case 's':
        audio = new Audio("sounds/tom-3.mp3");
        break;

      case 'd':
        audio = new Audio("sounds/tom-4.mp3");
        break;

      case 'j':
        audio = new Audio("sounds/snare.mp3");
        break;

      case 'k':
        audio = new Audio("sounds/crash.mp3");
        break;

      case 'l':
        audio = new Audio("sounds/kick-bass.mp3");
        break;



    }

    audio.play();

  }

document.addEventListener("keydown",function(event){

  var choice1=event.key;
  console.log(choice1);

  selectSoundFromCharacter(choice1);

  buttonAnimation(choice1);

});


function buttonAnimation(currentButton){

  var activeKey=document.querySelector("."+currentButton).classList.add("pressed");

  setTimeout(function(){

    document.querySelector("."+currentButton).classList.remove("pressed");
  },500);


}







// function randomGenerator() {
//
//   for (var j = 0; j < 30; j++) {
//     var random1 = Math.floor((Math.random() * 7) + 1);
//
//     var audio;
//
//     switch (random1) {
//       case 1:
//         audio = new Audio("sounds/tom-1.mp3");
//
//         break;
//
//       case 2:
//         audio = new Audio("sounds/tom-2.mp3");
//
//         break;
//
//       case 3:
//         audio = new Audio("sounds/tom-3.mp3");
//
//         break;
//
//       case 4:
//         audio = new Audio("sounds/tom-4.mp3");
//
//         break;
//
//       case 5:
//         audio = new Audio("sounds/snare.mp3");
//
//         break;
//
//       case 6:
//         audio = new Audio("sounds/crash.mp3");
//
//         break;
//
//       case 7:
//         audio = new Audio("sounds/kick-bass.mp3");
//
//         break;
//
//     }
//
//     audio.play();
//     // setTimeout(5000);
//
//   }


// }
