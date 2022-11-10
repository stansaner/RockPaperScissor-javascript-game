// Unchanging go in the global scope
var choices = ['r', 'p', 's'];
var winningConditions = ['pr', 'sp', 'rs'];

// Changing variables go in the loop cycle

var userChoice = 'r';
var compChoice = choices[Math.floor(Math.random() * choices.length)];
var numWins = 0;
var numLose = 0;
var choiceOK = false;
var match = false;

for (;true;){
    userChoice = prompt("What do you choose, (r)ock, (p)aper of (s)cissors?")
    
    // valid choice?
    choiceOK = false;
    for (var i=0; i< choices.length; i++) {
        if (userChoice == choices[i]) {
            choiceOK = true;
        };
    }

    if (!choiceOK) {
        alert("Invalid choice, only (r)ock, (p)aper and (s)scissors are valid")
        var wantMorePlay = confirm("would you like to play again?");
             if (!wantMorePlay) {
                console.log("Thanks for playing!");
                break;
             } else {
                continue;
             }
    }

    compChoice = choices[Math.floor(Math.random() * 3)]

    console.log("userChoice: " + userChoice);
    console.log("compChoice: " + compChoice);

    // if user choice is the same as computer, this is a tie

    if (userChoice == compChoice) {
        alert("This is a tie");

    } else {
        for (var i=0; i < winningConditions.length; i++) {
            if (userChoice+compChoice == winningConditions[i]) {
                match = true;
            }
        } 
    
// if the winning conditions includes the result the user won

        if (match) {
            numWins++;
            alert("You win! You won: "+numWins+" times so far.");
            match = false;
        }
// else the user lost
        else {
            numLose++;
            alert("You lose! You lost: "+numLose+" times so far.");
        }  
    
    }

// Play some more?    

    var wantMorePlay = confirm("would you like to play again?");
    if (!wantMorePlay) {
        console.log("Thanks for playing!");
        break;
    }
}


