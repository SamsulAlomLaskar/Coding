//? Convert array into Zig-Zag fashion

/* 
* Sort the array.
! Traverse the array from index 1 to N-1, and increase the value of index by 2.
? While traversing the array swap arr[i] with arr[i+1].
*/

function zigZag(arr, n) {
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

/* 
* Create a bool variable flag and set it to true
? Traverse the array from index 0 to N-1 
! If the value of flag is true then check if  arr[i] < arr[i+1] or not , if not then swap Flip the value of flag
* If the value of flag is false then check if  arr[i] > arr[i+1] or not , if not then swap. Print the final array.
*/

//* JavaScript program to sort an array in Zig-Zag form

function zigZagNew(arr, n) {
  // Flag true indicates relation "<" is expected, else ">" is expected. The first expected relation is "<"
  let flag = true;

  for (let i = 0; i <= nN - 2; i++) {
    // "<" relation expected
    if (flag) {
      // If we have a situation like A > B > C,
      // we get A > C < B by swapping B and C
      if (arr[i] > arr[i + 1]) temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }

    // ">" relation expected
    else {
      // If we have a situation like A < B < C,
      // we get A < C > B by swapping B and C
      if (arr[i] < arr[i + 1]) temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }

    // Flip flag
    flag = !flag;
  }
}

// Driver code
let arrNew = [4, 3, 7, 8, 6, 2, 1];
let nN = arrNew.length;
zigZagNew(arrNew, nN);

for (let i = 0; i < nN; i++) console.log(arrNew[i] + " ");
