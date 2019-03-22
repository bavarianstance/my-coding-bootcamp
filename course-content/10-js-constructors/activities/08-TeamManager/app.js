var inquirer = require("inquirer");
var coinflip = Math.random()
function Player(name, position, offense, defense){
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
}

Player.prototype.goodGame = function(){
if (coinflip > 0.5) {
	this.offense++;
} else {
	this.defense++;
}
}

Player.prototype.badGame = function() {
if(coinflip > 0.5){
	this.defense--;
} else {
	this.offense--;
}
}

Player.prototype.printStats = function(){
	console.log("Player Name: " + this.name + ", Position: " + this.position + ", Offense Rank: " + this.offense + ", Defense Rank: " + this.defense);
}

var count = 0;
var starterArray = [];
var subArray = [];
var playerArray = [];

var createPlayer = function(){

	if(count < 3){

	console.log("Enter New Player");

	inquirer.prompt([
	{
		name: "name",
		message: "Please enter Player's Name."
	}, {
		name: "position",
		message: "What is this Player's position?"
	}, {
		name: "offense",
		message: "Please enter offense rating, between 1-10"
	}, {
		name: "defense",
		message: "Please enter defense rating, between 1-10"
	}, {
		type: "confirm",
		message: "Is this player on your starting line? (2 MAX!)",
		name: "type",
		default: false
	}
		]).then(function(answers){
			var newPlayer = new Player(
				answers.name,
				answers.position,
				answers.offense,
				answers.defense,
				);
			if (answers.type === true){
			starterArray.push(newPlayer);
			playerArray.push(newPlayer);
			} else {
				subArray.push(newPlayer);
				playerArray.push(newPlayer);
			}
			count++;
			createPlayer();
		});
	} else {
		for (var i = 0; i < playerArray.length; i++){
			playerArray[i].printStats();
		}
		playGame();
		console.log(subArray);
		console.log(starterArray)
	}
};

createPlayer();

var gameCount = 5;
var teamScore = 0;
var totalOffStat = 0;
var totalDefStat = 0;



function playGame() {
	var randomNum1 = Math.floor(Math.random() * 20)+1; 
	var randomNum2 = Math.floor(Math.random() * 20)+1;

for (i = 0; i < playerArray.length; i++){
totalOffStat += parseInt(Player[i].offense);
totalDefStat += parseInt(Player[i].defense); 
};

if (randomNum1 <totalOffStat){
	teamScore++;
} else if (randomNum2 > totalDefStat) {
	teamScore--;
	}

console.log("Team Score: " + teamScore)
console.log("Total Team Offense: " + totalOffStat);
console.log("Total Team Defense: " + totalDefStat);

inquirer.prompt([
	 {
	 	type: "confirm",
	 	message: "Would you like to sub out a player from the bench?",
	 	name: "sub",
	 	default: false
	 }
	]).then(function(confirm){
		if (confirm.sub === true){
			subArray[0].push(starterArray);
			starterArray[0].push(subArray);
		}

	})

}

