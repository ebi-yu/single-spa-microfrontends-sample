import "./assets/base.css";
import "./assets/main.css";

import singleSpaVue, { type AppOptions } from "single-spa-vue";
import { createApp, h } from "vue";
import App from "./App.vue";

// 1. singleSpaVue()の呼び出し

// singleSpaVueでApp.vueインスタンスをラップする。
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render(this: AppOptions) {
      return h(App, {
        mountParcel: this.mountParcel,
        // カスタムのプロパティを渡す
        message: this.message,
      });
    },
  },
  handleInstance: () => {
    // vueアプリの通常の設定と一緒
  },
});

// 2. ライフサイクル関数を定義する

export const bootstrap = vueLifecycles.bootstrap; // 初期化時
export const mount = vueLifecycles.mount; // マウント時
export const unmount = vueLifecycles.unmount; // アンマウント時
export const update = vueLifecycles.update; // アップデート時
