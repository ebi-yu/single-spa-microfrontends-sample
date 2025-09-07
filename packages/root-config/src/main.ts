import { registerApplication, start } from "single-spa";

// Vueをグローバルに利用できるようにする
System.import("vue").then(() => {
  System.set(System.resolve("vue"), window.Vue);
});

// 1. 子アプリケーション(microfrontend)の登録

/**
 * 子アプリケーション(microfrontend)の登録を行う
 * @params
 * name : アプリケーションの名前
 * app : 登録したい子アプリケーション(microfrontend)を渡す
 * activeWhen : 指定したURLにアクセスした時のみ、子アプリケーション(microfrontend)が活性化する。
 * customProps : 任意の値をアプリケーション渡せる。
 */
registerApplication<Record<string, any>>({
  name: "vue-app",
  app: async () => System.import("vue-app"),
  activeWhen: ["/vue"],
  customProps: {
    message: "Hello from Single-SPA Vue app!",
  },
});
registerApplication<Record<string, any>>({
  name: "react-app",
  app: async () => System.import("react-app"),
  activeWhen: ["/react"],
  customProps: {
    message: "Hello from React app!",
  },
});

// 2. single-spaの起動

/**
 * single-spaを起動する
 * @params
 * urlRerouteOnly : デフォルトでtrue。trueに設定すると、クライアント側のルートが変更されない限り、history.pushState()およびの呼び出しhistory.replaceState()はシングルSPAリルートをトリガーしません。
 */
start({ urlRerouteOnly: true });
