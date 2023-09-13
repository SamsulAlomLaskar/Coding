// function StringChallenge(str1, str2) {
//   if (str1.length !== str2.length) return;

//   let sp1 = str1.split("");
//   let sp2 = str2.split("");
//   // code goes here
//   for (let i = 0; i < sp1.length; i++) {
//     let currentChar = sp1[i];
//     for (let j = 0; j < sp2.length; j++) {
//       if (currentChar === sp2[j]) return;
//     }
//   }

//   return str1;
// }

// // keep this function call here
// console.log(StringChallenge("hello", "hlelo"));

function findDiff(str1, str2) {
  let diff = "";
  let search, compare;

  if (str1.length > str2.length) {
    search = str1;
    compare = str2;
  } else {
    search = str2;
    compare = str1;
  }

  for (var i = 0; i < search.length; i++) {
    let symbol = search[i];

    if (compare.indexOf(symbol) === -1) {
      diff += symbol;
    }
  }
  return !diff;
}

const result = findDiff("hello", "ellsoh");
console.log(result);
