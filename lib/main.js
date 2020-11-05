function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Promise.resolve().finally();
// // lib/math.js
// export function sum(x, y) {
//     return x + y;
// }
// export var pi = 3.141593;
// var babel = require("@babel/core");
// const code = `
//     function add (num1, num2) {
//         return num1 + num2
//     }
// `
// babel.transform(code, {}, function(err, result) {
//     console.log(result)
//     debugger
// });
// import { parse } from '@babel/parser';
// import generate from '@babel/generator';
// const code = 'class Example {}';
// const ast = parse(code);
// const output = generate(ast, { /* options */ }, code);
// console.log(output)
// debugger
var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};