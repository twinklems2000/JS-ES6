//  Debouncing
//  To stop unwanted function calling with the help of settimeout function which help to increase performance of the website

let count = 0;

function getData() {
  console.log("onchange data....", count++);
}

function debounceFunction(callback, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    else
      setTimeout(() => {
        callback();
      }, delay);
  };
}

let betterFunction = debounceFunction(getData, 1000);
