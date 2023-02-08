function addNum(a, b, c) {
  return a + b + c;
}

let result = addNum(2, 3, 4);
// console.log(result);

function addThreeSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// this is only for understanding

let ans = addThreeSum(2);
// console.log(ans);

let ans1 = ans(3);

let ans2 = ans1(4);
// console.log(ans2);

// console.log(addThreeSum(2)(3)(4));

let charaterInfo = {
  name: "Repunzell",
  role: "Golden",
};

function characterDetails(obj) {
  return function (userinfo) {
    return obj[userinfo];
  };
}

let data = characterDetails(charaterInfo);
// console.log(data("name"));

// INFINITE CURRYING

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// let answer = add(2)(3)(4);
// console.log(answer);

// what if answer = add(2)(3)(4)(5)(6)

// then it will solve using infinite currying

function addNum(a) {
  return function (b) {
    if (b) return addNum(a + b);
    return a;
  };
}

let answer1 = addNum(2)(3)(4)(5)(6)();
console.log(answer1);
