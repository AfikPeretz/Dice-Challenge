
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var sourceDice1 = "images/dice" + randomNumber1 + ".png";
var sourceDice2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.getElementsByClassName("img1");
image1[0].setAttribute("src", sourceDice1);

var image1 = document.getElementsByClassName("img2");
image1[0].setAttribute("src", sourceDice2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 won!";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🚩It's a tie!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 won!🚩";
}

