function Character(name,profession,gender,age,strength,hp) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hp = hp;
	this.printStats = function() {
		console.log(this);
	};
	this.isAlive = function() {
		if (this.hp > 0) {
			return true;
		} else {
			return false;
		}
	};
	this.attack = function(character2) {
		character2.hp -= this.strength;
	}
	this.levelUp = function() {
		this.age += 1;
		this.strength += 5;
		this.hp += 25; 
	};
}

var guy = new Character("Bob", "Alchemist", "Male", 25, 150, 100);
var girl = new Character("Zoey", "Yoga Instructor", "Female", 22, 100, 88);

girl.printStats();
guy.printStats();


console.log(guy.isAlive());
