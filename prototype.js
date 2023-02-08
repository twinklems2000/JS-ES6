let obj = new Object({
  name: "kuhu",
  getPincess: function () {
    return this.name;
  },
});

// console.log(obj);

// prototype

let obj2 = {
  id: 1,
  name: "Twink",
  __proto__: obj,
};

console.log(obj2.__proto__.name);

// console.log(obj2.getPincess());

// add user defined properties to object and array

Object.prototype.show = function () {
  return this;
};

console.log(obj.show());

let arr = new Array();

let food = ["pizza", "cake"];

Array.prototype.showMe = function () {
  return this;
};

// console.log(food.showMe());

Array.prototype.convertToObject = function () {
  let objectData = {};
  this.forEach((item, index) => {
    objectData[index] = item;
  });
  return objectData;
};

// console.log(food.convertToObject());

function MyProtoType(name) {
  this.name = name;
}

MyProtoType.prototype = obj;

let myProto = new MyProtoType("Zeel");
console.log(myProto.getPincess());
