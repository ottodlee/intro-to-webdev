var testArray = [17, 42, 311, 5, 9, 10, 28, 500, 6];


function findMax(array) {
  // Set initial maxElement to first element in array
  var maxElement = array[0];


  for (var i = 1; i < array.length; i++) {
      // Compare initial maxElement value against the remaining values in the array
    if (array[i] > maxElement) {
      // Update maxElement value if larger value is found
      maxElement = array[i];
    }
  }
  
  return maxElement;
}

console.log(findMax(testArray))
