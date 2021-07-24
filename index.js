// Kindly open "ReadMe.md" file to read about the detail explanation of the problem and approach here.

const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

// a1 <= a2 >= a3 <= a4 >=

const arrangeNumbers = (arr) => {
  // return if argument is not an array
  if (!Array.isArray(arr)) {
    // O(1)
    return "You should pass an array!";
  }
  /************************Can be removed****************************/

  // We are filtering array to only contain numbers before start the
  // process. This is not needed for the problem to solve we can remove this code.
  arr = arr.filter(Number); // O(n)

  /*********************Can be removed*******************************/

  // return if arr contains only one element
  if (arr.length === 1) return arr; // O(1)

  // loop over all the even index
  for (let i = 0; i < arr.length; i += 2) {
    // O(n/2)
    // If current is greater than previous
    if (i > 0 && arr[i - 1] <= arr[i]) {
      swap(arr, i - 1, i);
    }
    // If current is greater than next
    if (i < arr.length - 1 && arr[i] >= arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
  return arr;
};

module.exports = arrangeNumbers;
// O(n)
