// Memoization

// It is an optimization technique that can be used to reduce time-consuming calculations by saving previous input to something called cache and returning result  from it

let sum = 0;

const countNum = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// console.time();
// console.log(countNum(5));
// console.timeEnd();

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      console.log("first time calling function");
      return result;
    }
  };
};

let ans1 = memoize(countNum);
console.time();
console.log(ans1(5));
console.timeEnd();

console.time();
console.log(ans1(5));
console.timeEnd();
