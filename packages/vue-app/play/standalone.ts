import { createApp, h } from "vue";
import App from "../src/App.vue";
import "../src/assets/base.css";
import "../src/assets/main.css";

const start = async () => {
  const app = createApp({
    render: () => h(App, {}),
  });
  app.mount("#app");
};

start();
