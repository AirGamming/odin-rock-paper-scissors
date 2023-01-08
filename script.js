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
    if(playerSelection = ("rock"||"paper"||"scissors")){
        return"Wrong choice computer won"
    }else if (computerSelection == playerSelection){
        return"it's a tie!"
    }else if(
        (computerSelection == "rock" && playerSelection == "scissors")||
        (computerSelection == "paper" && playerSelection == "paper")||
        (computerSelection == "scissors" && playerSelection == "rock")
    ){
        return "computer wins"
    }else{
        return "You win"
    }
}
//  FIXME:
// let game = () =>{
//     var playerPoints = 0
//     var computerPoints = 0
//     for(var i = 0; i >5; i++){
//         var choice = "rock"
//         var result = playRound(choice,getComputerChoice())
//         if (result == ("Wrong choice computer won"||"computer wins")){
//             computerPoints++
//         }else if(result == "You win"){
//             playerPoints++
//         }else{
//             i--
//         }
//     }
//     if(playerPoints>computerPoints){
//         alert("you won!")
//     }else{
//          alert("computer won")
//     }
// }