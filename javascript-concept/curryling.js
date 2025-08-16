// function add(a, b, c) {
//   return a + b + c;
// }

// const add1 = add.bind(null, 1); // fix a=1
// console.log(add1(2, 3)); // 6

// const add1and2 = add.bind(null, 1, 2);
// console.log(add1and2(3)); // 6

// // closure

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const add2 = add(1);
// console.log(add2(2)(3));

// infinite currying

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
console.log(add(1)(3)(4)());
