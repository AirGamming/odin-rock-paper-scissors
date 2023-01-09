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
//  FIXME:
const game =  (choice = "rock") =>{
    var playerPoints = 0
    var computerPoints = 0
    for(var i = 0; i > 5; i++){
        resoult = playRound(choice)
        if(resoult == 1){
            computerPoints++
        }else if (resoult == 2){
            playerPoints++
        }
    }
    return playerPoints
}