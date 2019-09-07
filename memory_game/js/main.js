//cards array
const cards = [
				{
					rank: "queen",
					suit: "hearts",
					cardImage:"images/queen-of-hearts.png"
				},
				{
					rank: "queen",
					suit: "diamonds",
					cardImage:"images/queen-of-diamonds.png"
				},
				{
					rank: "king",
					suit: "hearts",
					cardImage:"images/king-of-hearts.png"
				},
				{
					rank: "king",
					suit: "diamonds",
					cardImage:"images/king-of-diamonds.png"
				}

];
//cards in play array
const cardsInPlay = [];

//outcome function
function checkForMatch(){
	
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		console.log("You found a match!");
		alert("You found a match!");
	}
	else 
	{
		console.log("Sorry, try again.");
		alert("Sorry, try again.");
	}
	
}

function flipCard(cardId){

	console.log("User flipped: " + cards[cardId].rank);
	//display suit and img
	console.log("suit: " + cards[cardId].suit);
	console.log("image: " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay.length == 2)
	{
		checkForMatch();
	}

}
flipCard(0);
flipCard(2);




