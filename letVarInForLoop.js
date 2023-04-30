const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//? Refer the below link for detail description
// * https://dev.to/richardbray/why-the-var-and-let-keywords-shouldnt-be-used-interchangeably-3n07#:~:text=Because%20var%20is%20function%20scoped,g.

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i], "VAR");
  }, 1000);
}

//* =======================================

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i], "LET");
  }, 2000);
}

//* =======================================

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000 * i);
}
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000 * i);
}

//? ==============================
