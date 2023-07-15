
// detecting click press

drumLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    }); 
}

// detecting keyboard press
    document.addEventListener("keypress", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    } );


    function makeSound(key) {
        switch (key) {
            case "w":
                var snare = new Audio("sounds/crash.mp3");
                snare.play();
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
                var crash = new Audio("sounds/snare.mp3");
                crash.play();
            break;
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
            case "l":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
            
            default: console.log("please press on one of the specified chars, don't be fool");
        } 
    }


    function buttonAnimation(button) {
        var activeButton = document.querySelector("." + button);
        activeButton.classList.add("pressed");
        setTimeout(function() {activeButton.classList.remove("pressed")}, 100);
    }




// var music = new Audio("sounds/tom-1.mp3");
// music.play()

// function add(num1, num2) {
//     return num1 + num2 ;
// }

// function multi(num1, num2) {
//     return num1 * num2 ;
// }

// function divid(num1, num2) {
//     return num1 / num2;
// }

// function sub(num1, num2) {
//     return num1 - num2; 
// }

// function exp(num1 , num2) {
//     return num1 ** num2;
// }

// function calc(num1, num2, operator) {
//     return operator(num1, num2);
// }
// console.log(calc(3, 5, exp));