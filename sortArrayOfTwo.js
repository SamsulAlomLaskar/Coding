//? Generate all possible sorted arrays from alternate elements of two given sorted arrays

//* GFG

/* 

A = {10, 15, 25}
B = {1, 5, 20, 30}

The resulting arrays are:
  10 20
  10 20 25 30
  10 30
  15 20
  15 20 25 30
  15 30
  25 30
  
 */

/*
 * Function to generates and prints all sorted arrays from alternate elements of
 * 'A[i..m-1]' and 'B[j..n-1]' If 'flag' is true, then current element is to be
 * included from A otherwise from B. 'len' is the index in output array C. We
 * print output array each time before including a character from A only if
 * length of output array is greater than 0. We try than all possible
 * combinations
 */
function generateUtil(A, B, C, i, j, m, n, len, flag) {
  if (flag) {
    // Include valid element from A
    // Print output if there is at least one 'B' in output array 'C'
    if (len != 0) printArr(C, len + 1);

    // Recur for all elements of A after current index
    for (let k = i; k < m; k++) {
      if (len == 0) {
        /*
         * this block works for the very first call to include the first element in the
         * output array
         */
        C[len] = A[k];

        // don't increment lem as B is included yet
        generateUtil(A, B, C, k + 1, j, m, n, len, !flag);
      } else if (A[k] > C[len]) {
        /* include valid element from A and recur */
        C[len + 1] = A[k];
        generateUtil(A, B, C, k + 1, j, m, n, len + 1, !flag);
      }
    }
  } else {
    /* Include valid element from B and recur */
    for (let l = j; l < n; l++) {
      if (B[l] > C[len]) {
        C[len + 1] = B[l];
        generateUtil(A, B, C, i, l + 1, m, n, len + 1, !flag);
      }
    }
  }
}

/* Wrapper function */
function generate(A, B, m, n) {
  let C = Array(m + n).fill(0);

  /* output array */
  generateUtil(A, B, C, 0, 0, m, n, 0, true);
}

// A utility function to print an array
function printArr(arr, n) {
  for (i = 0; i < n; i++) console.log(arr[i] + " ");
  console.log("\n");
}

let A = [10, 15, 25];
let B = [5, 20, 30];
let n = A.length;
let m = B.length;
generate(A, B, n, m);
