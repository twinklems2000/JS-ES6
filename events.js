// Event Bubbling, Capturing
// Stop propagation, Immediate Propagation, and prevent default

let div = document.querySelector("div");
let button = document.querySelector("button");

// div.addEventListener(
//   "click",
//   () => {
//     console.log("div");
//   },
//   true
// );

// button.addEventListener(
//   "click",
//   () => {
//     console.log("button");
//   },
//   true
// );

// capuring means flow parent to child for that we give TRUE parameter event listeners

div.addEventListener("click", () => {
  console.log("div");
});

button.addEventListener("click", (e) => {
  //   e.stopPropagation();
  console.log("button");
});

button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("button1");
});
let a = document.querySelector("a");
a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("a => prevent defalut to stop going to new html page");
});
