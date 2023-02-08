//  CALL METHOD\

let userInfo = {
  name: "Piuu",
  movie: "TinkerBell",
  print: function () {
    console.log(this.name);
  },
};

userInfo.print();

//  GENERIC FUNCTION

function print1(state, stat1) {
  console.log(this.movie + " " + state + " " + stat1);
}
// print1.call(userInfo, "Boat", "Dream");
print1.apply(userInfo, ["Dream", "Boat"]);

let userInfo1 = {
  name: "Repunzell",
  movie: "Tangalled",
};

// userInfo.print.call(userInfo1, ["Fairy", "Wings"]);
// print1.apply(userInfo1, ["Fairy", "Wings"]);

//  BIND METHOD WHICH ONLY REFER WE NEED TO CALL IT SEPARATALLY

let bindResult = print1.bind(userInfo1, "Fairy", "Wings");
bindResult();
