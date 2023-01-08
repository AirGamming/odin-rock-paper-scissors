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


let playRound = (playerSelection, computerSelection) =>{
    if (computerSelection == playerSelection){
        return"it's a tie!"
    }else if(
        (computerSelection == "rock" && playerSelection == "scissors")||
        (computerSelection == "paper" && playerSelection == "paper")||
        (computerSelection == "scissors" && playerSelection == "rock")
    ){
        return"computer wins"
    }else{
        return"You win"
    }
}

let game = () =>{
    var yourPoints
    var computerPoints
    
}