let userScore = 0;
let computerScore = 0;
let winScore = 5;

//Getting the elements form the HTML page(Caching the DOM).
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
//(Caching ENDs here).


//@@@@@setting the winScore@@@@@@@@@;


//After click on RPC button(Onclick)
//Checks who won and who lost.
function game(userChoice){
    const computerChoice = getcomputerChoice();
       let k;
       switch(userChoice+computerChoice)
       {
           case "rs":
           case "pr":
           case "sp":
               win(userChoice,computerChoice)
               break;
           case "rp":
           case "ps":
           case "sr":
               lose(userChoice,computerChoice)
               break;
           
           case "rr":
           case "pp":
           case "ss":
               draw(userChoice,computerChoice)
               break;
       }
   }
   
   //Computer's Random choice.
   function getcomputerChoice(){
    const choices = ["r","p","s"]
    let randomNo = Math.floor(Math.random()*3)
    return choices[randomNo]
   }
   
   
//*******************final verdict ******************

// subscript text.
const smalluser= "Your".fontsize(2).sup();
const smallcomputer= "Computer's".fontsize(2).sup();
//Ends here.

function win(userChoice,computerChoice){
    console.log(userScore);
    userScore++;
    //Changing the user score in the HTML page.
    if(userScore < winScore)
    {
    userScore_span.innerHTML = userScore
    result_div.innerHTML = `${smalluser}${ellaborate(userChoice)} Beats ${smallcomputer}${ellaborate(computerChoice)} . You win!🔥`
    scoreBoard_div.classList.add('greenglow')
    setTimeout(function(){scoreBoard_div.classList.remove('greenglow')},300)
    }else{
        //Reset game when scoreBoard hits 20. 
        promptToReset("u");
    }
}

function lose(userChoice,computerChoice){
    console.log(computerScore);
    computerScore++;
    //Changing the compute score in the HTML page.
    if(computerScore < winScore)
    {
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = `${smallcomputer}${ellaborate(computerChoice)} Beats ${smalluser}${ellaborate(userChoice)} . You lose!😱`
    scoreBoard_div.classList.add('redglow')
    setTimeout(function(){scoreBoard_div.classList.remove('redglow')},300)
    }else{
        //Reset game when scoreBoard hits 20.
        promptToReset("c");
    }
}

function draw(userChoice,computerChoice){
    result_div.innerHTML = "Hell yeah! It's a draw!"
    scoreBoard_div.classList.add('greyglow')
    setTimeout(function(){scoreBoard_div.classList.remove('greyglow')},300)
}



//Resetting the game back to start 0:0
//And declaring who won.

function promptToReset(whoWon){
    userScore = 0
    computerScore = 0
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML=`Let the battle begin!`
    if(whoWon == "u"){
        alert(">>>You have won the match!<<<")
    }else{
        alert(">>>Computer has won the match!<<<")
    }   
}
//*******************final verdict ENDs here ******************

//Sends emojis in place of rpc.
function ellaborate(choice){
    if (choice == "r"){
        return "🗿"
    }else if(choice == "p"){
        return "🧻"
    }else{
        return "✂️"
    }
}

//Action on click on RPC buttons.
function main()
{
    rock_div.addEventListener('click', function(){
        game("r")
    });
    paper_div.addEventListener('click' , function(){
        game("p")
    });
    scissor_div.addEventListener('click' , function(){
        game("s")
    });
    scoreBoard_div.addEventListener('click' , function(){

    });
}
main();

