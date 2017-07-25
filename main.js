function paperScissorsRock(userChoice){

  var r = Math.random();
  if (r < 0.33){
    computerChoice = 'paper';
  } else if (r < 0.66){
    computerChoice = 'rock' ;
  } else {
    computerChoice = 'scissors';
  }


  var output;
  if (userChoice == computerChoice) {
    output = "It's a draw!";

  } else {
    
    if (userChoice == 'scissors') {
      if(computerChoice =='paper'){
        output = "YOU WIN!";
      }
      else
        output = "you lose";
    }
    if (userChoice == 'paper'){
       if(computerChoice == 'rock'){
        output = "YOU WIN!";
       }
      else
        output = "you lose";
    }
    if (userChoice == 'rock'){
      if (computerChoice == 'scissors'){
         output = "YOU WIN!";
      }
       else  
        output = "you lose"; 
    }


  }


  alert("you:"+userChoice+" comp:" + 
        computerChoice+"  RESULT: "+output)
}