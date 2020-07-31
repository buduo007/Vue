<template>
  <div>
    <h1 class="title">{{ message }}</h1>
    <h2 class="name">{{ name }}</h2>
    <h2>{{ gender }}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
// 导入Cpn组件
import Cpn from "./Cpn";

export default {
  name: "App",
  // 注册Cpn组件
  components: {
    Cpn,
  },
  data() {
    return {
      message: "hello webpack",
      name: "布多先生",
      gender: "man",
    };
  },
};
</script>

<style scoped>
.title {
  color: blue;
}
.name {
  color: black;
}
</style>
