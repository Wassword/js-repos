//Define a hand array with following values
const hands = ['rock' , 'paper', 'scissors'];
//Define gethand function
 function getHand(){
   return hands[parseInt(Math.random()*10)%3]
};
// Define 2 objects for 2 players
 const player1 ={
   name:'Player 1',
   getHand: getHand
};

 const player2 ={
   name: "player 2",
   getHand: getHand
 };

//Define playRound function
 function playRound(player1,player2){
   let hand1 = player1.getHand();
   let hand2 = player2.getHand();

   console.log(`${player1.name} played ${hand1}`)
   console.log(`${player1.name} played ${hand1}`)
   

   if (hand1 === hand2) {
       console.log("Both players played ${hand1}. its a tie")
       return null;

   } else if  (
       (hand1 === 'rock' && hand2 === "scissors") ||
       (hand1 === 'paper' && hand2 === "rock") ||
       (hand1 === 'paper' && hand2 === 'scissors')
     //Determine the winner
    ) {
       console.log(`${player1.name} wins!`);
       return player1;
    } else {
       console.log(`${player2.name} wins!`)
       return player2;
    }

    };


