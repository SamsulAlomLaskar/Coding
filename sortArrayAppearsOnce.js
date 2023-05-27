//? Find the element that appears once in a sorted array

/* 
Given a sorted array in which all elements appear twice (one after one) and one element appears only once. Find that element in O(log n) complexity.
Example: 
Input:   arr[] = {1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8}
Output:  4
Input:   arr[] = {1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8}
Output:  8
*/

//! =======================Method 1===============================

//* A Simple Solution is to traverse the array from left to right. Since the array is sorted, we can easily figure out the required element.

// JavaScript program to find the element that appears only once. A Linear Search based function to find the element that appears only once

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

//! =======================Method 2===============================

/*
Time Complexity: O(n)
Auxiliary Space: O(1),  since no extra space has been taken.

Another Simple Solution is to use the properties of XOR (a ^ a = 0 & a ^ 0 = a). The idea is to find the XOR of the complete array. The XOR of the array is the required answer.
 */

// JavaScript program to find the element that appears only once

// A XOR based function to find the element that appears only once
function search1(arr, n) {
  let XOR = 0;
  for (let i = 0; i < n; i++) {
    XOR = XOR ^ arr[i];
  }
  console.log("The required element is", XOR);
}

// Driver code
let arr1 = [1, 1, 2, 4, 4, 5, 5, 6, 6];
let len1 = arr1.length;

search1(arr1, len1);

//! =======================Method 3===============================

/* 
Time Complexity: O(n)
Auxiliary Space: O(1) 

An Efficient Solution can find the required element in O(Log n) time. The idea is to use Binary Search. Below is an observation on the input array. 
All elements before the required have the first occurrence at even index (0, 2, ..) and the next occurrence at odd index (1, 3, …). And all elements after the required elements have the first occurrence at an odd index and the next occurrence at an even index. 

Find the middle index, say ‘mid’.
If ‘mid’ is even, then compare arr[mid] and arr[mid + 1]. If both are the same, then the required element after ‘mid’ and else before mid.
If ‘mid’ is odd, then compare arr[mid] and arr[mid – 1]. If both are the same, then the required element after ‘mid’ and else before mid.
*/

// A Binary Search based function to find the element that appears only once
function search2(arr, low, high) {
  // Base cases
  if (low > high) return;

  if (low == high) {
    console.log("The required element is", arr[low]);
    return;
  }

  // Find the middle point
  var mid = Math.floor((low + high) / 2);

  // If mid is even and element next to mid is same as mid, then output element lies on right side, else on left side
  if (mid % 2 == 0) {
    if (arr[mid] == arr[mid + 1]) search2(arr, mid + 2, high);
    else search2(arr, low, mid);
  }

  // If mid is odd
  else {
    if (arr[mid] == arr[mid - 1]) search2(arr, mid + 1, high);
    else search2(arr, low, mid - 1);
  }
}

// Driver Code
var arr2 = [1, 1, 2, 4, 4, 5, 5, 6, 6];
var len2 = arr2.length;

search2(arr2, 0, len2 - 1);

//! =======================Method 4===============================

/* 
Time Complexity: O(Log n)
Auxiliary Space: O(1) 

Note: Other Solutions to the question are slight variations of the approaches discussed in this post.

Another Approach: An Efficient Solution can find the required element in O(Log n) time. The idea is to use Binary Search without recursion. All elements before the required have the first occurrence at even index (0, 2, ..and so on) and the next occurrence at odd index (1, 3, ..and so on). 

The approach will be as follows:

Find the middle index assuming mid using start pointer and end pointer. And check the mid element in the following cases

Case 1) If mid element is not equal to mid+1 element  and mid-1 element. This case returns the answer.
Case 2) When mid element is even and equal to mid+1 element this means number is not present in the left side of the array. In this case start pointer will change to mid+1.
Case 3) When mid element is odd and equal to mid-1 element this means number is not present in the left side of the array. In this case start pointer will change to mid+1.
Case 4) When mid element is odd and equal to mid+1 element this means number is not present in the right side of the array. In this case end pointer will change to mid-1.
Case 5) When mid element is even and equal to mid-1 element this means number is not present in the right side of the array. In this case end pointer will change to mid-1. 
Check for all case for possible values of mid till start<=end..

If all checks fail there is no such element.

This solution requires extra checks for edge cases.

Edge Case 1) If only one element is present in the array. Therefore return the only element of the array.
Edge Case 2) If last element of the array is the required element. Therefore return the last element of the array.
Edge Case 3) If first element of the array is the required element. Therefore return the first element of the array.
*/

function search3(nums) {
  // A Binary Search based method to find the element
  // that appears only once
  var start = 0,
    end = nums.length - 1,
    mid;

  // For Edge Cases
  if (nums.length == 1)
    // If only one element is in the array
    return nums[0];

  if (nums[start] != nums[start + 1])
    // If the first element
    // is the element that
    // appears only once
    return nums[start];

  if (nums[end] != nums[end - 1])
    // If Last element is the element
    // that appears only once
    return nums[end];

  // Binary Search
  while (start <= end) {
    mid = start + (end - start) / 2;

    // CASE 1
    if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1])
      return nums[mid];
    // CASE 2 and CASE 3
    else if (
      (nums[mid] == nums[mid + 1] && mid % 2 == 0) ||
      (nums[mid] == nums[mid - 1] && mid % 2 != 0)
    )
      start = mid + 1;
    // CASE 4 and CASE 5
    else end = mid - 1;
  }

  // If no such element found
  return -1;
}

var arr3 = [1, 1, 2, 4, 4, 5, 5, 6, 6];
var element = search3(arr3);
if ((element = 2)) console.log("The required element is " + element);
else console.log("There is no such element");

//! =======================Method 5===============================
/* 
Time Complexity: O(logn)
Auxiliary Space: O(1)

 This article is contributed by Mehboob Elahi. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.

Another Approach:-

We can simply use hashmap to store the frequency of the elements and after that we can just traverse the hashmap to find the element with frequency 1.
*/

// function to find element using dictionary
function search4(arr) {
  // taking dictionary to store frequency
  let freq = {};

  for (let i of arr) {
    // storing frequency
    if (i in freq) {
      freq[i] += 1;
    } else {
      freq[i] = 1;
    }
  }

  // iterating over dictionary
  for (let [key, value] of Object.entries(freq)) {
    // if element found
    if (value == 1) {
      // printing element
      console.log(key);
      break;
    }
  }
}

let arr4 = [1, 1, 2, 4, 4, 5, 5, 6, 6];

search4(arr4);
