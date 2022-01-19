const p1 = {
    score : 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score : 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
const sports = document.querySelector("#sport")
const backgroundImg = document.querySelector("#img")

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent){
    if(!isGameOver){
        player.score += 1;
       
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
    player.display.innerText = player.score;
}

p1.button.addEventListener("click", function(){
    updateScore(p1, p2)
})

p2.button.addEventListener("click", function(){
    updateScore(p2, p1)
})

winningScoreSelect.addEventListener("change", function(){
    winningScore = parseInt(this.value) 
    reset();
})

resetButton.addEventListener("click", reset)

sports.addEventListener("change", function(){
    if(sports.value === "football"){
        backgroundImg.src = "nathan-rogers-I9HyW30buuQ-unsplash.jpg"
    }else if(sports.value === "golf"){
        backgroundImg.src = "courtney-cook-SsIIw_MET0E-unsplash.jpg"
    }else{
        backgroundImg.src = "istockphoto-1192307192-170667a.jpg"
    }
})

function reset(){
    isGameOver = false;
    p1.display.innerText = 0;
    p1.score = 0;
    p1.button.disabled = false;
    p1.display.classList.remove("has-text-success", "has-text-danger")
    p2.display.innerText = 0;
    p2.score = 0;
    p2.button.disabled = false;
    p2.display.classList.remove("has-text-success", "has-text-danger")
}





