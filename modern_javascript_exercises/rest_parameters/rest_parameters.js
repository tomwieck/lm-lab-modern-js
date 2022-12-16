// Instructions can be found in rest_parameters.md

//////////////////////////////////////////////////
//
// JEST version
export function add(...args) {
  // Add a loop here
  return args.reduce((total, n) => total + n, 0);
}

//console.log(add(1, 2, 3, 4, 5));

//module.exports = add;

////////////////////////////////////////////////
//
// NODE version
//
// function add(...args) {
    // Add a loop here
//  return args.reduce((total, n) => total + n, 0);
//}
//
// console.log(add(1, 2, 3, 4, 5));
//
// module.exports = add;
