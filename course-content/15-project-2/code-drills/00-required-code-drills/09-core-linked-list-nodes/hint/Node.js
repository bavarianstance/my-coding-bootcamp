// Linked List - Node Constructor


// This constructor function creates a `Node` object 
// with a `value` and a pointer to the `next` node
// in the linked list
//
// By assigning null to `value`, if the constructor
// function isn't passed an argument, `value` will
// default to null
function Node(value = null) {
  // -------------------- Your Code Here --------------------
  // The default for `value` is null if an argument
  // isn't passed into the constructor




  // We include the `getValue` and `getNext` methods
  // so users won't have to operate on `value` and
  // `next` directly




  // The default for `value` is null if an argument
  // isn't passed into `setValue` or `setNext`




  // -------------------- End Code Area ---------------------
}

// We're going to be using this constructor in our
// linked list, so we will be exporting the constructor
// to use later.
module.exports = Node;