let name = "小明";
let age = 18;
// 导出方式一

let flag = true;
// export let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log("小明", sum(10, 20));
}

// 导出flag和sum
// 导出方式二
export { sum, flag };

const address = '长安'
// 导出方式三 (导入者可重命名, 一个模块只能导出一个)
// export default address

// export default function  (arg) {
//   console.log(arg)
// }

// export default {}

// let arr = []

// export default []

// export default '长安'

// 导出方式四  统一全部导入
import * as xiaoming2 from './xiaoming2.js'
console.log(xiaoming2.hello)



