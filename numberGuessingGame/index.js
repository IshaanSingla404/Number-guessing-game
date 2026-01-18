const Min = 1;
const Max = 100;
const Answer = randomNum = Math.floor(Math.random() * (Max - Min + 1));
const disp = document.getElementById("disp");

let attempts = 0;
let guess;

        GuessButton.onclick = function(){
        guess = document.getElementById("Guess").value; 
            if(guess >= Min && guess <= Max){
            if(Answer > guess){
                Message.textContent = ("TOO LOW! , Try Again !");
                attempts ++;
            }else if( Answer < guess){
                Message.textContent = ("TOO HIGH! , Try Again");
                attempts ++;
            }else if( Answer == guess){
                attempts ++;
                Message.textContent = (`YOU ARE CORRECT AND IT TOOK YOU ${attempts} ATTEMPTS!`);
                
            }
            }else{
                 Message.textContent = ("ENTER A NUMBER BETWEEN 1 AND 100");
            }
            disp.textContent = (`ATTEMPTS TAKEN = ${attempts}`);

        }

    