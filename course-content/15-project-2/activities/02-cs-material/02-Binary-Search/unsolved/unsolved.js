//You have two options:

// 1. create your own pseudocode and attempt to code it out
// 2. Use the Hint pseudocode.

//Hint pseudocode
//create a function that takes in an ordered array of integers and a target number to search for
//Set some starting values:
//maxIndex
//minIndex

//While minIndex <= maxIndex
// Get a position near the middle and check to if that currentIndex matches your target 

// if that currentIndex less than we are looking for, look *above* this value.
//minIndex = currentIndex + 1;

// If it's more than we are looking for, look *below* this value.
//maxIndex = currentIndex - 1;

//if currentElement is not greater then searchElement && currentElement is not less then searchElement && minIndex <= maxIndex 
// We found it; return the index.

// otherwise:
//if it is greater or less then the target and minIndex <= maxIndex
//return false

function binarySearch(array, searchInput){
	var currentElement;
	var currentIndex;
	var maxIndex = array.length - 1;
	var minIndex = 0;

	while (minIndex <= maxIndex) {
		currentIndex = Math.floor((minIndex + maxIndex) / 2 );

	currentElement = array[currentIndex];
 	console.log('Start Index: ', minIndex);
    console.log('End Index: ', maxIndex);
    console.log('Current Element', array[currentIndex]);	

    if (currentElement < searchElement){
    	minIndex = currentIndex + 1;
    	} else if (currentElement > searchInput){
    		maxIndex = currentIndex - 1;
    	} else {
    		console.log("Current Index: ", currentIndex);
    		console.log("Current Element: ", array[currentIndex]);
      		console.log(" ------- ");
      		return currentIndex;
    	}
	}
	return false;
}
