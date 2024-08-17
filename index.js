let self_score = 0;
let computer_score = 0;
let result="";
$(document).ready(function(){

    $("img").click(function(){
        
        const self_choice = $(this).attr("alt");
        console.log("Your choice: ",self_choice);
        const random_choice = Math.floor(Math.random() * 3);
        let computer_choice = "not chosen yet";

        if(random_choice == 0){
            computer_choice = "rock";
        }
        else if(random_choice == 1){
            computer_choice = "paper";
        }
        else{
            computer_choice = "scissors"
        }

        console.log("Computer choice: ",computer_choice);
        evaluate(computer_choice,self_choice)
    });
});


function evaluate(computer_choice,self_choice){

    if(computer_choice == self_choice){
        result = "Its a Draw.";
        caption = "Computer: I was not going that Hard 😏";
        $(".caption").text(caption);
        $(".result-display").text(result);
        console.log("Result",result);
        console.log(`Your Score: ${self_score}\n Computer Score: ${computer_score}`);
        $(".self-score").text(self_score);
        $(".computer-score").text(computer_score);
    }
    else if((self_choice=="rock" && computer_choice=="scissors")||
    (self_choice=="paper" && computer_choice=="rock")||
    (self_choice=="scissors" && computer_choice=="paper")){
        result = "You Won 🤩😎";
        caption = "Computer: 😶";
        $(".caption").text(caption);
        $(".result-display").text(result);
        self_score++;
        $(".self-score").text(self_score);
        $(".computer-score").text(computer_score);
        console.log("Result",result);
        console.log(`Your Score: ${self_score}\nComputer Score: ${computer_score}`);
    }
    else{
        result = `You Lose. ${computer_choice} beats ${self_choice}`;
        caption = "Computer: Do you want me to not go that hard!! 🤗🥰";
        $(".caption").text(caption);
        $(".result-display").text(result);
        
        computer_score++;
        $(".self-score").text(self_score);
        $(".computer-score").text(computer_score);

        console.log("Result",result);
        console.log(`Your Score: ${self_score}\n Computer Score: ${computer_score}`);
    }
}