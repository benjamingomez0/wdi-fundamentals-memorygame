//cards array
const cards = ["queen","queen","king","king"];
//cards in play array
const cardsInPlay = [];
//card choice 
let cardOne = cards[0];
//add choice to cards in play array
cardsInPlay.push(cardOne);
//console check
console.log("User flipped " + cardOne);
//card 2 choice
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
//add choice to cards in play array
console.log("User flipped " + cardsInPlay[1]);

//outcome logic
if(cardsInPlay.length == 2)
{
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else if(cardsInPlay[0] !== cardsInPlay[1])
	{
		alert("Sorry, try again.");
	}
}