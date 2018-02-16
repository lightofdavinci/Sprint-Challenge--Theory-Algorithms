// Exercise I.

// a) O(n) because of n ^ 3 / n ^ 2
// b) O(log(n)) because of division ( /2 )
// c) O(sqrt(n)) inner loops are constant (*8*8)
// d) O(n * log(n))  inner loop is linear, outer loop is logarithmic
// e) O(n ^ 3) the most inner loop is constant (*10)
// f) O(n)
// g) O(n) - both recursions iterate as loops with step of 1

// Exercise II.
// I think it fits from our repl
function largestDifference(arr) {
  let low = arr[0];
  let high = arr[1] - low;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let potential = current - low;
    low = Math.min(current, low);
    high = Math.max(potential, high);
  }
  return high;
}

// Exercise III
// a) O(n^2) 
// At each stage the array will be divided into a degenerate subarray 
// from one support element and a subarray of all other elements.
// b) O(n* log(n)) 
// In each iteration, each of the subarrays would be divided into two equal-sized arrays. 
// This would give the shortest sorting time.