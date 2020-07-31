export default {
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