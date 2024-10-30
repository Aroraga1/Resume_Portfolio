const container = document.querySelector(".container");
const obj = document.querySelector(".obj");
const body = document.querySelector("body");
const matter = ["stone","paper","sisor"];
const results = document.querySelector(".results");
const randomChoose = document.querySelector(".randomChoose");
const userChoice = document.querySelector(".userChoice");


function playGame(choices){    
    let random_choose = matter[Math.floor(Math.random() * 3)]; 
    let result;
    if(random_choose === choices){
        result = "DRAW!";
    }else {
        switch(random_choose){
        case "stone": result = (choices === "paper") ? "you win!" : "You Lose!";  
        break;
        case "sisor": result = (choices === "stone") ? "you win!" : "You Lose!";  
        break;
        case "paper": result = (choices === "sisor") ? "you win!" : "You Lose!";  
        break;    
    }
}
randomChoose.textContent = random_choose;
userChoice.textContent = choices;
results.textContent = result;
}