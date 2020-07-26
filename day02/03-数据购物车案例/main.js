const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-2",
        price: 59.0,
        count: 1,
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.0,
        count: 1,
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-3",
        price: 128.0,
        count: 1,
      },
    ],
  },
  computed: {
    priceAll() {
      // 方式一
      // let result = 0;
      // for (const item of this.books) {
      //   result += item.price * item.count
      // }
      // return result

      // 方式二
      // return this.books.reduce(function  (preValue, currValue) {
      //   return preValue + currValue.price * currValue.count
      // }, 0)
      // 简化方式
      return this.books.reduce(
        (preValue, currValue) => preValue + currValue.price * currValue.count,
        0
      );
    },
  },
  methods: {
    // getFinalPrice(price) {
    //   return '¥' + price.toFixed(2)
    // }
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    },
  },
  // 过滤器
  filters: {
    showPrice(price) {
      return "¥" + price.toFixed(2);
    },
  },
});
