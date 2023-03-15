const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 1000);
}
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 2000);
}
