// alert("Working");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;    //It'll generate randon number between 1-6 by using(math.random) and with the help of (Math.floor (It'll floating to decimal number)) 
var randomDiceImage = "dice" + randomNumber1 + ".png"; // concitation which will give random image between dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6)+1; //generate random no between 1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png";// provide random img between 1-6.pgn
var randomImageSource2 = "images/" + randomDiceImage2;//provide source of images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = ("🥇Player1 Win");
}


else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = ("🥇Player2 Win");
}

else {
    document.querySelector("h1").innerHTML = ("😁Draw!")
}