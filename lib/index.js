// import visitor from '../plugin/bable-plugin-arrow-function'
// // babel 核心库，用来实现核心转换引擎
// import { transform } from '@babel/core'
// const code = `const add = (num1, num2) => num1 + num2`
// let result = transform(code,{
//     plugins:[
//         {
//             visitor
//         }
//     ]
// })
// console.log(result.code);
import * as babylon from "babylon";
import traverse from "babel-traverse";
const code = `function square(n) {
  return n * n;
}`;
console.log(babylon.parse(code));