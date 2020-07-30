// 1. 使用commonjs的模块化规范
const { add, mul } = require("./js/mathUtils");
console.log(add(10, 20));
console.log(add(10, 20));

//2. 使用ES6的模块化规范
import { name, age, height } from "./js/info";
console.log(name, age, height);

// 3. 依赖csswen文件
require("./css/normal.css");

// 4. 依赖less文件
require("./css/special.less");

document.writeln("<h2>你好啊, 李银河!</h2>");
