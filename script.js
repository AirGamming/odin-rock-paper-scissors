const regex = /(rock)|(paper)|(scissors)/g

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
        return 0
    }else if(
        (computerSelection == "rock" && playerSelection == "scissors")||
        (computerSelection == "paper" && playerSelection == "paper")||
        (computerSelection == "scissors" && playerSelection == "rock")
    ){
        return 1
    }else{
        return 2
    }
}
const game =  () => {
    var playerPoints = 0
    var computerPoints = 0
    var resoult
    for(var i = 0; i < 5; i++){
        var choice = prompt("rock, paper, scissors!")
        choice = choice.toLocaleLowerCase()
        while(choice == (!"rock"||!"paper"||!"scissors")){
            choice = prompt("worng answer try again")
            if (choice === null){
                break
            }else if(choice != "rock"||
            choice != "paper"||
            choice != "scissors"){
                break
            }
        }

        resoult = playRound(choice)
        if(resoult == 1) {computerPoints = computerPoints + 1}
        
        else if (resoult == 2){playerPoints = playerPoints + 1}
        
        else{console.log("tie")}
    }

    if(computerPoints > playerPoints){return"computer won"}
    
    else if (computerPoints < playerPoints){return"you won"}
    
    else{return("tie " + computerPoints + " " + playerPoints)}
}

const startButton = document.querySelector("button.start")
const gameUi = document.querySelector("#game") 

//TODO:
startButton.addEventListener('click', () =>{
    const startUi = document.querySelectorAll(".start");
    startUi.forEach(e => e.remove(e));
    gameUi.classList.remove("hidden");
    });