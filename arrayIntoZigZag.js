//? Convert array into Zig-Zag fashion

/* 
* Follow the steps mentioned below to implement the idea:

* Sort the array.
! Traverse the array from index 1 to N-1, and increase the value of index by 2.
? While traversing the array swap arr[i] with arr[i+1].
Print the final array.

*/
// Program for zig-zag conversion of array
function zigZag(arr, n) {
  // sort the by using the sort function
  arr.sort();
  //traverse the array from 1 to n-1
  for (let i = 1; i <= n - 2; i++) {
    // swap the current element with next element
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}

// Driver code
let arr = [4, 3, 7, 8, 6, 2, 1];
let n = arr.length;
zigZag(arr, n);
// print the array
for (let i = 0; i < n; i++) console.log(arr[i] + " ");
