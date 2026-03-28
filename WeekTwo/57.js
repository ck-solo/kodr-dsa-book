// Q57. Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \YES\"

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return "NO";
    }
  }
  return "YES";
}

// Example
console.log(isSorted([1, 5, 8, 9, 10, 15])); // YES
console.log(isSorted([1, 5, 3, 9])); // NO