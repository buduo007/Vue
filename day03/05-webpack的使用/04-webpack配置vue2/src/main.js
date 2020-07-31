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

// 抽取组件
const App = {
  template: `
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ name }}</h2>
    <h2>{{ gender }}</h2>
  </div>
  `,
  data() {
    return {
      message: "hello webpack",
      name: "布多先生",
      gender: "man",
    };
  },
};

// 5. 使用vue进行开发
import Vue from "vue";
new Vue({
  el: "#app",
  template: `<App></App>`,
  components: {
    App,
  },
});
