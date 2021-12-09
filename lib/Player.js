const Potion = require("../lib/Potion");
const Character = require("./Character");

class Player extends Character {
	constructor(name = "") {
		super(name);

		this.inventory = [new Potion("health"), new Potion()];
	}

	getStats() {
		return {
			potions: this.inventory.length,
			health: this.health,
			strength: this.strength,
			agility: this.agility,
		};
	}

	getInventory() {
		if (this.inventory.length) {
			return this.inventory;
		}
		return false;
	}

	addPotion(potion) {
		this.inventory.push(potion);
	}

	usePotion(index) {
		const potion = this.inventory.splice(index, 1)[0];

		switch (potion.name) {
			case "agility":
				this.agility += potion.value;
				break;
			case "health":
				this.health += potion.value;
				break;
			case "strength":
				this.strength += potion.value;
				break;
		}
	}
}

const player = new Player("Jane");

Player.prototype = Object.create(Character.prototype);

player.getStats();
player.getInventory();

module.exports = Player;
