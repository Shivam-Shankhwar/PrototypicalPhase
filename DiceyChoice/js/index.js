// For getting player name (OPTIONAL)

player1 = prompt("Enter player1 name :");
document.querySelectorAll("p")[0].textContent = player1;
player2 = prompt("Enter player2 name :");
document.querySelectorAll("p")[1].textContent = player2;


// For image manipulation

min = Math.ceil(1);  //for image-1
max = Math.floor(7);
randomNumber1 = Math.floor(Math.random() * (max - min) + min); 

var randomNumber2 = Math.random();  //for image-2
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;


document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


// For <h1> Text manipulation  

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 " + player1 +" Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = player2 + " Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!"
}
