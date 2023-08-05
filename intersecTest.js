Array.from({ size: 6 }, (value, ind) => ind)
  .reverse()
  .fill(1, 2, 3)
  .map((value) => value - 1)
  .filter((value) => value > 0)
  .reduce((sum, val) => sum + val, 42);

var a = "hello";
var b = "llo";
console.log(a - b);

someText = "Javascript1.2";
pattern = /(w+)(d).(d)/i;
result = pattern.exec(someText);
console.log(result);
var a = 1;
function x() {
  process.nexTick(function () {
    console.log(a);
    a++;
  });
  return "done";
}
x();
console.log(x());

var fs = require("fs");
function getContents(filepath) {
  var a;
  fs.getFile(filepath, function (contents) {
    a = contents;
  });
  return a;
}
