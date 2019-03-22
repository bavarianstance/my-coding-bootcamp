// TODO: Create an object called "garage" with the following:
// Contains a key called carsParked and a value of 0
// Contains a key called maxSlots and a value of 2
// A method called "parkingStatus" that will print the number of cars parked and remaining slots.
var garage {
  carsParked: 0,
  maxSlots: 2,
  parkingStatus: function() {
    console.log("Number of Cars Parked: " + this.carsParked);
    console.log("Number of Slots Left: " + (this.maxSlots - this.carsParked));
  },
  allCars: {}
}


// TODO: Create a Car constructor function that takes in a "name", "make", "model", and "color"
var Car = function(name, make, model, color) {
  this.name = name;
  this.make = make;
  this.model = model;
  this.color = color;
}


// TODO: Add a 'removeCar' method to the garage to do the following:
// Remove a car based on the name passed into the function.
// Reduce the number of cars parked.
garage.removeCar = function(newCarName){
  this.carsParked--;
  this.maxSlots++;
  delete this.allCars[newCarName]
}


// TODO: Add a 'addCar' method to the garage to do the following:
// Check if there are slots available.
// Add a car object based with a key of the car's name passed into the function.
// Increase the number of cars parked.
garage.addCar = function(newCar) {
  if (this.maxSlots > this.carsParked){
  this.carsParked++;
  this.maxSlots--;
  this.allCars[newCar.name];
  }
}

// TODO: Create 3 cars using the constructor function "myFirstCar", "mySecondCar", "myThirdCar":
// 'Batmobile', 'DC', 'Batmobile', 'Black'
// 'Black Canary Motorcycle', 'DC', 'Motorcycle', 'Black'
// 'Ant-Van', 'Marvel', 'Van', 'Red'
var myFirstCar = new Car("Dad's Old Car", "MBZ", "190E", "Bronze");

var mySecondCar = new Car("First BMW", "BMW", "328i", "Black");

var myThirdCar = new Car("The Beast", "BMW", "M5", "Silver");


// TODO: Attempt to add all 3 cars and run the parkingStatus method from garage.
// parkingStatus should state it contains 2 parked cars with 0 remaining slots





// TODO: Remove the first car using its name and run the parkingStatus method from garage.
// parkingStatus should state it contains 1 parked cars with 1 remaining slots




// TODO: Attempt to add the 3rd car again and run the parkingStatus method from garage.
// parkingStatus should state it contains 2 parked cars with 0 remaining slots



// TODO: console log the garage object to see its current information.
// console.log(garage)
/*
// Should print out the following.
{ carsParked: 2,
  maxSlots: 2,
  parkingStatus: [Function: parkingStatus],
  removeCar: [Function],
  addCar: [Function],
  'Black Canary Motorcycle':
   Car {
     name: 'Black Canary Motorcycle',
     make: 'DC',
     model: 'Batmobile',
     color: 'Black' },
  'Ant-Van':
   Car {
     name: 'Ant-Van',
     make: 'Marvel',
     model: 'Van',
     color: 'Red' } }
*/