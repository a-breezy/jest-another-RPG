const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const Player = require("./Player");

function Game() {
	this.roundNumber = 0;
	this.isPlayerTurn = false;
	this.enemies = [];
	this.currentEnemy;
	this.player;
}

Game.prototype.initializeGame = function () {
	this.enemies.push(new Enemy("Goblin", "Sword"));
	this.enemies.push(new Enemy("Orc", "Baseball Bat"));
	this.enemies.push(new Enemy("Dark Link", "Dark Sword"));

	this.currentEnemy = this.enemies[0];

	inquirer
		.prompt({
			text: "text",
			name: "name",
			message: "What is your name?",
		})
		// destructure name from the prompt object
		.then(({ name }) => {
			this.player = new Player(name);

			// test the object creation
			console.log(this.startNewBattle());
		});
};

module.exports = Game;
