// Your code goes here
let changePocket = 8;
let att = 3;
let attempt = 3;
let sumPrize = 0;
let nowPrize = 100;
let choice = confirm('Do you want to play a game?');
if(choice === false){
    alert("You did not become a billionaire, but can.");
} else{
    do{
        let randomPocket = Math.round(Math.random()*changePocket);
        for (let i=0; i<3; i++){
            
            var userPocket = Math.round(prompt(`Choose a roulette pocket number from 0 to ${changePocket};
            Attempts left: ${att}
            Total prize: ${sumPrize}$;
            Possible prize on current attempt: ${nowPrize}$`));
            if (randomPocket === userPocket) {
                var roundWin = nowPrize;
                sumPrize += nowPrize;
                nowPrize = nowPrize*2;
                changePocket+=4;
                att = attempt;
                break;
            }else {
                nowPrize/=2;
                att--;
           }  
        }
   if (userPocket !== randomPocket) {
        alert(`Thank you for your participation. Your prize is: ${sumPrize}$`);
        var reQuest = confirm('Do you want to play a game?');
        att = attempt;
        sumPrize = 0;
        nowPrize = 100;
        changePocket = 8;
        }else if (userPocket === randomPocket) {
            reQuest = confirm(`Congratulation, you won! Your prize is: ${roundWin}$. Do you want to continue?`);
        }
    }
    while(reQuest === true);
}