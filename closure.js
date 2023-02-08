var sum = function (a) {
  console.log("Hi your number " + a);
  var c = 10;
  return function (b) {
    return a + b + c;
  };
};

// console.log(sum(2));
// var store = sum(2);
// console.log(store(5));

var summmm = function (a, b, c) {
  return {
    getTwo: function () {
      return a + b;
    },
    getThree: function () {
      return a + b + c;
    },
  };
};

var store = summmm(2, 3, 6);
console.log(store.getTwo());
console.log(store.getThree());

// LEXICAL SCOPE CLOSURE

// ANNONYMOUS FUNCTION FUNCTION WITHOUT NAME
