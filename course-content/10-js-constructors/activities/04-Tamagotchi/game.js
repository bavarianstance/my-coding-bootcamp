function DigitalPal(hungry, sleepy, bored, age){
	this.hungry = hungry;
	this.sleepy = sleepy;
	this.bored = bored;
	this.age = age;
	this.feed = function() {
		if (this.hungry === true) {
			console.log("That was yummies!");
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log("No thanks! I'm fulls.");
		}
	}
	this.sleep = function() {
		if (this.sleepy === true){
			console.log ("Zzzzzzz");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		} else {
			console.log("No way! I'm not tires.");
		}
	}
	this.play = function() {
		if (this.bored === true){
			console.log("Yay! Let's play!");
			this.bored = false;
			this.hungry = true;
		} else {
			console.log("Not right meows. Maybe laters?");
		}
	}
	this.increaseAge = function() {
		this.age += 1;
		console.log("Happy Birthday to me! I am " + this.age + " years old!");
	}
}

var dog = new DigitalPal(true, false, false, 0);

dog.outside = false;
dog.bark = function() {
	console.log("Woof! Woof!");
}
dog.goOutside = function() {
	if (this.outside === false){
		console.log("Yay! I love the outdoors");
		this.outside = true;
		this.bark();
	}
	else {
		console.log("But we're already outside tho...");
	}
}

dog.goInside = function() {
	if (this.outside === true) {
		console.log("awe, do I haftos? Okies...");
		this.outside = false;
	} else {
		console.log("but I'm already inside...");
	}
}

var cat = new DigitalPal(false, true, false, 0);

cat.houseCondition = 100;
cat.meow = function() {
	console.log("Meow Meow!");
}

cat.destroyFurniture = function() {
	if (this.houseCondition > 0){
	this.houseCondition -= 10;
	console.log("MEOWHAHAHAHA. I SCRATCH FEELS GOODS");
	this.bored = false;
	this.sleepy = true;
	} else {
		return;
	}
}

cat.buyNewFurniture = function() {
	this.houseCondition += 50;
	console.log("Are you sure? It will get feels goods again");
}
