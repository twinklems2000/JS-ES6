// Throttling  is a performance optimization technique to reduce the rate at which events trigger functions and it is very useful to improve the performance of large scale web applications.

// function myThrot() {
//   console.log("throttling....");
// }

function throtFunction(fn, delay) {
  return function (...args) {
    document.querySelector("button").disabled = true;
    setTimeout(() => {
      fn();
    }, delay);
  };
}

let throtlling = throtFunction(() => {
  document.querySelector("button").disabled = false;
  console.log("throttling....");
}, 2000);
