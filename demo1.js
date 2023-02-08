const data = [
  { name: "pihu", movie: "Tangalled" },
  { name: "kuhu", movie: "Cindereall" },
];

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((item, index) => {
      output += `<h1>${item.name}</h1>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// CALLBACK FUNCTION

function createData(newData, callback) {
  setTimeout(() => {
    data.push(newData);
    callback();
  }, 2000);
}

// createData({ name: "TinkerBell", movie: "Tangalled" }, getData);

// getData();

// PROMISE

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("something went wrong.....");
      }
      data.push(newData);
    }, 2000);
  });
}

// createData({ name: "TinkerBell", movie: "Tangalled" })
//   .then(getData)
//   .catch((err) => console.log(err));

// ASYNC AWAIT

async function start() {
  await createData({ name: "TinkerBell", movie: "Tangalled" });
  getData();
}

start();
