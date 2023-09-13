function testHack() {
  var test = [];
  for (var z = 0; z < 5; z++) {
    test[z] = function () {
      return z;
    };
    return test;
  }
}
var test = testHack();
test[4]();
