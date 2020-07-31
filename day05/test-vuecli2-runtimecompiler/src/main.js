// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

// 组件
const cpn = {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: '我是组件cpn'
    }
  },
}

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // components: { App },
  // template: "<App/>"
  render(createElement) {
    // 1. 普通用法 createElement('标签', {标签的属性}, ['内容'])
    // return createElement('h2', {class: 'box'}, ['hello world'])
    // return createElement('h2', 
    // {class: 'box'}, 
    // ['hello world', createElement('button', ['按钮'])])

    // 2. 传入组件对象
    // return createElement(cpn)
    return createElement(App)
  },
});
