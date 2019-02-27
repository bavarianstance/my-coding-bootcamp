let car = {
make: 'BMW',
model: 'M5',
year: '2000',
mileage: '140000',
isSupercharged: true,

driveToSanJose: function() {
	console.log('Old mileage: ' + this.mileage);
	this.mileage = this.mileage + 40;
	console.log('New mileage: ' + this.mileage)
},

getSmog: function() {
	this.isSupercharged = false;
},

gotSmog: function() {
	this.isSupercharged = true;
}

}



