function Programmer(name, title, age, language){
	this.name = name;
	this.title = title;
	this.age = age;
	this.language = language;
	this.printInfo = function() {
		console.log("Name: " + this.name + ", Title: " + this.title + ", Age: " + this.age + ", Favorite Language: " + this.language); 
	}
}

var coder1 = new Programmer("Calvin", "Software Engineer", 32, "Javascript");

coder1.printInfo();