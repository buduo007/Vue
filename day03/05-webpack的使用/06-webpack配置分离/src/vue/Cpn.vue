<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data() {
    return {
      title: "我是Cpn组件",
      content: "我是Cpn内容",
    };
  },
};
</script>

<style>
.title {
  color: red;
}
.content {
  color: chartreuse;
}
</style>
