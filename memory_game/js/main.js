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

function flipCard(){
	cardId = this.getAttribute("data-id");
	console.log("User flipped: " + cards[cardId].rank);
	//display suit and img to log
	console.log("suit: " + cards[cardId].suit);
	console.log("image: " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	if(cardsInPlay.length == 2)
	{
		checkForMatch();
	}

}

function createBoard(){
	for(var i=0;i<cards.length;i++){
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src","images/back.png");
		cardElement.setAttribute("data-id",i);
		cardElement.addEventListener("click",flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();




