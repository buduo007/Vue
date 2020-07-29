const moduleA = (function () {

  // 导出的对象
  let obj = {}

  let name = "小明";
  let age = 22;

  function sum(num1, num2) {
    return num1 + num2;
  }

  let flag = true;

  if (flag) {
    document.write(sum(10, 20));
  }

  obj.flag = flag
  obj.sum = sum

  return obj
})();
