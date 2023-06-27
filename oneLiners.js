// Copy to clipboard
// const copyToClipboard = (text) =>
//   navigator.clipboard?.writeText && navigator.clipboard.writeText(text);

// copyToClipboard("Hello copy to clipboard");

// Unique Elements

const getUnique = (arr) => [...new Set(arr)];
const arr = [1, 2, 2, 4, 5, 6, 6, 7, 7, 5, 5, 5, 8];
console.log(getUnique(arr));
