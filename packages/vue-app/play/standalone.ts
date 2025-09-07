import { createApp, h } from "vue";
import App from "../src/App.vue";
import "../src/assets/base.css";
import "../src/assets/main.css";

const start = async () => {
  const app = createApp({
    render: () =>
      h(App, {
        message: "Hello from standalone Vue app!",
        mountParcel: () => {},
      }),
  });
  app.mount("#app");
};

start();
