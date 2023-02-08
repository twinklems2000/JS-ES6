const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
  { name: "Urbanic", category: "Service Based", start: 1989, end: 2010 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach(function (item, index) {
//   console.log(item);
// });

// companies.forEach((item) => console.log(item));

// for (let i = 0; i <= ages.length; i++) {
//   if (ages[i] > 20) {
//     console.log(ages[i]);
//   }
// }

// ages.filter(function (item) {
//   if (item > 20) {
//     console.log(item);
//   }
// });

let finalAge = ages.filter((item) => item > 20);
// console.log(finalAge);

let company = companies.filter((item) => item.category === "Service Based");
// console.log(company);

let dummyData = companies.map((item, index) => {
  return `${item.name} ${item.category}`;
});

// console.log(dummyData);

let sortData = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  }
  if (c1.start < c2.start) {
    return -1;
  }
});

// console.log(sortData);

// let sortNumber = ages.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });

let sortNumber = ages.sort((a, b) => (a > b ? 1 : -1));

// console.log(sortNumber);

let total = 0;
for (let i = 0; i < ages.length; i++) {
  total += i;
}
// console.log(total);

let sum = ages.reduce(function (total, item) {
  return total + item;
});

console.log(sum);

let sum1 = ages.reduce((total, item) => total + item);
// console.log(sum1);
