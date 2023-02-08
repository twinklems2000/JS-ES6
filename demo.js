var string = "Welcome to this Javascript Guide!";
var string = string.split("").reverse().join("").split(" ").reverse().join(" ");
console.log(string);

var arr = [1, 2, 3, 4];
console.log(Array.isArray(arr));

const isInt = (num) => num % 1 === 0;

console.log(isInt(3));

var arr1 = [1, 2, 3, 4];
const duplicate = (arr) => arr.concat(arr);
console.log(duplicate(arr1));

// const multiplication = (x) => {
//   return (y) => {
//     return (z) => {
//       return x * y * z;
//     };
//   };
// };

// console.log(multiplication(2)(3)(4));

const multiplication = (x, y, z) => {
  return x * y * z;
};

// console.log(multiplication(2, 3, 4));
console.log(2 * 3 * 4);

const addSix = (num) => num + 6;

console.log(addSix(56));

const addAny = (anyNum) => {
  return function (n) {
    return anyNum + n;
  };
};

var addTwelve = addAny(12);
console.log(addTwelve(10));

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   let f = i % 3 == 0,
//     b = i % 5 == 0;
//   console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
// }

const isAnagram = (word1, word2) => {
  a = word1.toLowerCase();
  b = word2.toLowerCase();

  a = a.split("").sort().join();
  console.log("a>>>>", a);
  b = b.split("").sort().join();
  console.log("b>>>>", b);
  if (a === b) {
    return true;
  } else return false;
};

console.log(isAnagram("not", "ont"));

const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
  {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
  {
    id: 4,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

console.log(passengers.map((item) => item.passengerName));

console.log(
  passengers.map(
    (item) => item.isVegetarianOrVegan === true && item.passengerName
  )
);

const numberOfFlights = passengers.sort(
  (passenger1, passenger2) =>
    passenger2.connectedFlights - passenger1.connectedFlights
);

console.log(numberOfFlights);

let arrData = [
  {
    id: 1,
    parentId: 1,
    city: "baroda",
  },
  {
    id: 2,
    parentId: 1,
    city: "aanand",
  },
  {
    id: 3,
    parentId: 1,
    city: "surat",
  },
  {
    id: 4,
    parentId: 2,
    city: "baroda",
  },
  {
    id: 5,
    parentId: 2,
    city: "amdvad",
  },
  {
    id: 6,
    parentId: 3,
    city: "mumbai",
  },
];

let newArr = [];
// for (let i = 0; i <= arrData.length; i++) {
//   // console.log("city>>>", arrData[i].city);
//   // console.log(">>>>", arrData[i].city);
//   if (arrData[i].parentId === 1) {
//     var cityName = arrData[i].city;
//     let cities = newArr.push(cityName);
//     console.log("1", newArr.push(cities));
//     // console.log("city", cities);
//   }
// }

const sameArr = arrData.filter((id) => id.parentId === 1);
let cityName = sameArr.map((item) => item.city);
// console.log(">>>>>>", cityName);

// for (let i = 1; i <= arrData.length; i++) {
//   let ab = arrData[i].parentId;
//   // console.log("ab>>>>>", ab);
//   let abbb = arrData.filter((id) => id.parentId === ab);
//   // .map((item) => item.city);
//   // console.log("abbb", abbb);
//   let parentIDD = abbb.map((item) => item.parentId);
//   let bb = abbb.map((item) => item.city);
//   // console.log("ab>>", bb);
//   let ccc = abbb[0];
//   let object = {};
//   object.ccc = bb;
//   console.log("^&***((((", object);

//   // object.abbb[0].parentId = bb;

//   // console.log("object>>>>", object);

//   // for (let i = 1; i <= parentIDD.length; i++) {
//   //   console.log(">>>>", i);
//   // }
//   // console.log("object>>>", abbb);
// }

// for (let i = 1; i <= arrData.length; i++) {
//   let objectData = {};
//   let ab = arrData[i].parentId;
//   // console.log("ab>>>", ab);
//   let filterData = arrData.filter((id) => id.parentId === ab);
//   objectData.ab = filterData.map((id) => id.city);
//   console.log("object", objectData);
// }

// REDUCE METHOD

function groupBy(property) {
  return arrData.reduce(function (accumulator, currentObject) {
    let key = currentObject[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObject.city);
    return accumulator;
  }, {});
}

let groupedPeople = groupBy("parentId");
console.log(groupedPeople);
