let getComputerChoice = () =>{
    let index = Math.floor(Math.random()*3)
    if(index == 1){
        return("rock")
    }else if(index == 2){
        return("paper")
    }else{
        return("scissors")
    }
}

let playRound = (playerSelection, computerSelection = getComputerChoice()) =>{
    if (computerSelection == playerSelection){
        return [0, computerSelection]
    }else if(
        (computerSelection == "rock" && playerSelection == "scissors")|| //pc win
        (computerSelection == "paper" && playerSelection == "rock")||   //pc win
        (computerSelection == "scissors" && playerSelection == "paper") //pc win 
    ){
        return [1, computerSelection]
    }else{
        return [2, computerSelection]
    }
}
const popup = (outome) => {
    let item = document.createElement("div")
    item.classList.add("popup")
    item.innerHTML = `<div class='container'> <p> ${outome} </p> <button onclick= 'refreshPage()'> try again </button> </div>`
    var body  = document.querySelector("body")
    body.appendChild(item)
}

const divResoult = document.querySelector('div.result')
const whoWon = document.querySelector('.whoWon')
const scoreDisplay = document.querySelector('#score-display')
const play = () => {
    let playerPoints = 0
    let PCPoints = 0
    gameButtons.forEach(e => {
        if (!gameButtons) console.error("can't load game buttons")
        e.addEventListener('click', () =>{
            a = playRound(e.dataset.choice)
            console.log(a[1])
            divResoult.innerHTML = `<p>computer chose ${a[1]}, and you choose ${e.dataset.choice}</p>`
            if(a[0] == 0){
                whoWon.innerHTML = "It's a tie!"
                whoWon.style.color = 'grey'
            }else if(a[0] == 1){
                whoWon.innerHTML = "Computer won!"
                whoWon.style.color = 'red'
                PCPoints = PCPoints + 1
            }else{
                whoWon.innerHTML = "You won!"
                whoWon.style.color = 'green'
                playerPoints=playerPoints + 1
            }
            scoreDisplay.innerHTML = `computer: ${PCPoints} you ${playerPoints}`
            if(PCPoints == 5) popup("computer won")
            else if(playerPoints == 5) popup("you won")
    }) 
    
    });
}
const gameButtons = document.querySelectorAll('.game-buttons')
const startButton = document.querySelector("button.start")
const gameUi = document.querySelector("#game") 

startButton.addEventListener('click', () =>{
    const startUi = document.querySelectorAll(".start");
    startUi.forEach(e => e.remove(e));
    gameUi.classList.remove("hidden");
    gameUi.style.cssText = "position: absolute; top: 40vh; width: 100%; textAlign: center;";
    setTimeout(1000)
    play();
    });
const refreshPage = ()=>{
    location.reload()
}
