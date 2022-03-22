// For first player
var randomNumber1 = Math.floor(Math.random()*6 + 1);

var randomImage = "dice" + randomNumber1 +".png";

var randomImageSource = "images/" +randomImage;

var image1 = document.getElementById("dice1");

image1.setAttribute("src", randomImageSource);

// fot second player

var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randomImage2 = "dice" + randomNumber2 +".png";

var randomImageSource2 = "images/" +randomImage2;

var image2 = document.getElementById("dice2");

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "⛳ Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "Player 2 Wins ⛳";
}

else {
    document.querySelector('h1').innerHTML = "Draw!";

}
console.log(image1);

// Event listener on button fot reload the page

let btn = document.getElementById("btn");
btn.addEventListener("click" , function (){
    location.reload();
    
})
let diceAudio = new Audio("sound/dice.wav");
diceAudio.play();


























// // THIS IS FOT DICE NO 1

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
// // console.log(randomNumber1);

// var randomDiceImage = ("dice" +randomNumber1+ ".png"); //dice1 - dice6

// var randomDiceSource = "images/" + randomDiceImage; // images/dice1 - images/dice6

// var image1 = document.querySelectorAll("img")[0];
 
// image1.setAttribute("src" , randomDiceSource);


// // THIS IS FOT DICE NO 2

// var randomNumber2 = Math.floor(Math.random()* 6)+ 1;

// var randomDiceImage2 = ("dice" +randomNumber2+ ".png"); //dice1 - dice6

// var randomDiceSource2 = "images/" +randomDiceImage2;

// var image2 = document.querySelectorAll("img")[1];

// image2.setAttribute("src", randomDiceSource2);

// if(randomNumber1 > randomNumber2) {
//     document.querySelector("h1"). innerHTML = "⛳Player 1 Wins!"
// }
// else if (randomNumber2 > randomNumber1){
//     document.querySelector("h1").innerHTML = "Player 2 wins! ⛳"
// }
// else {
//     document.querySelector("h1").innerHTML = "Draw!"
// }



