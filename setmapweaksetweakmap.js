// Set, Map, WeakSet, WeakMap

// set
// It containes only uniqu  values, duplicate values are not allowed
// Object Constructor

let arr = [1, 2, 3, 4, 5];
let set1 = new Set(arr);

set1.add(5);
set1.add(6);
set1.add({ name: "Twinkle" });
// console.log(set1);
set1.delete(4);
console.log(set1.has(6));

set1.forEach((element) => {
  console.log(element);
});

for (let item of set1) {
  console.log(item);
}

// Map

let newMap = new Map([
  [1, "pihu"],
  [2, "kuhu"],
]);

newMap.set(3, "Repunzell");
console.log(newMap);
console.log(newMap.get(3));

newMap.forEach((item, index) => {
  console.log(item + " at index " + index);
});

// weakset  weakMap : you can not iterate this two and both are only object oriented

let ws = new WeakSet();

let obj1 = { 1: "dreamcatcher" };
let obj2 = {};

// console.log(ws.add(7));
console.log(ws.add(obj2));
console.log(ws.add(obj1));

// ws.forEach((element) => {
//   console.log(element);
// });

let wm = new WeakMap();
let ob1 = { cinderella: "blue" };
let ob2 = {};

// wm.set([
//   [1, "pihu"],
//   [2, "kuhu"],
// ]);

wm.set(ob1, "pvr");
wm.set(ob2, "pvr");

console.log(wm);
console.log(wm.has(ob2));
