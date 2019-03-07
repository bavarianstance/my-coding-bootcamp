# INTERVIEW QUESTIONS

## indexOfElm

## Instructions
Given an array and an element, find the index of that element in the array. If it does not exist in the array, return -1. If there are multiple occurences of that element in the array, return the index of first occurence

## Example
Test Case 1: [1,2,1,3,2,4,2,3,3,1,3,3], 3
Expected Output: 3

Test Case 2:[1,2,3,4], 5
Expected Output: -1


```javascript

function indexOfElm(arr, element){
    for(var i =0;i<arr.length;i++){
// Q: What are you going to do? 
// A: I want to iterate through the array.
// Q: How are you going to do it? 
// A: With a for loop
// Q: Why are you going to do it? 
// A: To examine each element of the Array. 
        if(arr[i] === element)
            return i;
// Q: What are you going to do? 
// A: Return the index *if* the value at that index is the same as the input target
// Q: How are you going to do it? 
// A: With comparison operators, by comparing for equal values. 
// Q: Why are you going to do it? 
// A: To check for matching values. 
    }
    return -1;
// Q: What are you going to do? 
// A: once we compare all elements to the target return -1 if no matches are found
// Q: How are you going to do it? 
// A: With comparison operator, by comparing for equal values and completing the for loop
// Q: Why are you going to do it? 
// A: To determine if the element exist in the array. 
}

console.log(indexOfElm([1,2,3,4],3))

```
