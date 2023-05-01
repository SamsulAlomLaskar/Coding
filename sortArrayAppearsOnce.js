//? Find the element that appears once in a sorted array

/* 

Given a sorted array in which all elements appear twice (one after one) and one element appears only once. Find that element in O(log n) complexity.

Example: 

Input:   arr[] = {1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8}
Output:  4

Input:   arr[] = {1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8}
Output:  8

*/

//* A Simple Solution is to traverse the array from left to right. Since the array is sorted, we can easily figure out the required element.

// JavaScript program to find the element that
// appears only once

// A Linear Search based function to find
// the element that appears only once
function search(arr, n) {
  let ans = -1;
  for (let i = 0; i < n; i += 2) {
    if (arr[i] != arr[i + 1]) {
      ans = arr[i];
      break;
    }
  }

  if (arr[n - 2] != arr[n - 1]) ans = arr[n - 1];

  // ans = -1 if no such element is present.
  console.log("The required element is", ans);
}

// Driver code
let arr = [1, 1, 2, 4, 4, 5, 5, 6, 6];
let len = arr.length;

search(arr, len);
