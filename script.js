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
    if(playerSelection != ("rock"||"paper"||"scissors")){
        return"Wrong choice computer won"
    }else if (computerSelection == playerSelection){
        return [0,computerSelection]
    }else if(
        (computerSelection == "rock" && playerSelection == "scissors")||
        (computerSelection == "paper" && playerSelection == "paper")||
        (computerSelection == "scissors" && playerSelection == "rock")
    ){
        return [1,computerSelection]
    }else{
        return [2,computerSelection]
    }
}
//TODO:
const rockIcon = '<i class="fa-solid fa-hand-back-fist rock"></i>'
const paperIcon = '<i class="fa-solid fa-hand paper"></i>'
const scissorsIcon = '<i class="fa-solid fa-hand-scissors scissors"></i>'
const divResoult = document.querySelector('div.result')
const whoWon = document.querySelector('.whoWon')

const play = () => {
    console
    gameButtons.forEach(e => {
        if (!gameButtons) console.error("can't load game buttons")
        e.addEventListener('click', () =>{
            a = playRound(e.dataset.choice)
            divResoult.innerHTML = `<p>computer chose ${a[1]}, and you choose ${e.dataset.choice}</p>`
            if(a[0] == 0){
                whoWon.innerHTML = "It's a tie!"
                whoWon.style.color = 'grey'
            }else if(a[0] == 1){
                whoWon.innerHTML = "Computer won!"
                whoWon.style.color = 'red'
            }else{
                whoWon.innerHTML = "You won!"
                whoWon.style.color = 'green'
            }
    }) 

    });
}
const gameButtons = document.querySelectorAll('.game-buttons')
const startButton = document.querySelector("button.start")
const gameUi = document.querySelector("#game") 

//FIXED:
startButton.addEventListener('click', () =>{
    const startUi = document.querySelectorAll(".start");
    startUi.forEach(e => e.remove(e));
    gameUi.classList.remove("hidden");
    gameUi.style.cssText = "position: absolute; top: 50vh; width: 100%; textAlign: center;";
    setTimeout(1000)
    play();
    console.log(gameButtons)
    });

