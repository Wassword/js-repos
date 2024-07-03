//Define a hand array with following values
const hands = ['rock' , 'paper', 'scissors'];
//Define gethand function
 function getHand(){
   return hands[parseInt(Math.random()*10)%3]
}
// Define 2 objects for 2 players
 const player1 ={
   name:'Sabah',
   wins: 0,
   getHand: getHand
}

 const player2 = {
   name: "Gerald",
   wins: 0,
   getHand: getHand

   
 }
 const player3 ={
  name:'Liah',
  wins: 0,
  getHand: getHand

 }
 const player4 ={
  name:'XXO',
  wins: 0,
  getHand: getHand
 }

//Define playRound function
 function playRound(player1,player2){
   let hand1 = player1.getHand();
   let hand2 = player2.getHand();

   console.log(`${player1.name} played ${hand1}`)
   console.log(`${player2.name} played ${hand2}`)
   

   if (hand1 === hand2) {
       console.log(`Both players played ${hand1}. its a tie`)
       return null;

   } else if  (
       (hand1 === 'rock' && hand2 === "scissors") ||
       (hand1 === 'paper' && hand2 === "rock") ||
       (hand1 === 'scissors' && hand2 === 'paper')
     //Determine the winner
    ) {
       console.log(`${player1.name} wins!`);
       return player1;
    } else {
       console.log(`${player2.name} wins!`)
       return player2
      }
      }
     

     function playGame(player1,player2, playUntil) {

      player1.wins =0;
      player2.wins =0;

    
     // play rounds until one player wins required amount of hands
      while (player1.wins < playUntil && player2.wins < playUntil) { 
         let winner= playRound(player1,player2);
         if (winner != null) 
            { if (player1.name === winner.name ) {
            player1.wins += 1
            
         }   
               
         if (player2.name === winner.name ) {
          player2.wins += 1

          
         }   console.log(`${winner.name} wins this round. Total wins: ${winner.wins}`);} 
        
      
      }
     
     let winnerPlayer = player1.wins > player2.wins ? player1 : player2;
     console.log(`${winnerPlayer.name} wins the game`);
     return winnerPlayer;
    }; 

     //Tournament function
 function playTournament(player1,player2,player3,player4,playUntil) {

          let g1Winner = playGame(player1,player2,playUntil);
          let g2Winner = playGame(player3,player4,playUntil);
          let worldChampion = playGame(g1Winner, g2Winner, playUntil);

        console.log(`${worldChampion.name} is the tournament winner`);
      }
    
    
  let playUntil= 3;
  playTournament(player1, player2, player3, player4, playUntil);

     
     
      
      
