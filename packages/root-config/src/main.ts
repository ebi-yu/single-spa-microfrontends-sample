import { registerApplication, start } from "single-spa";

// Vueをグローバルに利用できるようにする
System.import("vue").then(() => {
  System.set(System.resolve("vue"), window.Vue);
});

/**
 * マイクロフロントエンドアプリケーションの登録を行う
 * @params
 * name : アプリケーションの名前
 * app : 登録したいsingle-spaアプリケーションを渡す
 * activeWhen : 指定したURLにアクセスした時のみ、マイクロフロントエンドアプリケーションが活性化する。
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

/**
 * マイクロフロントエンドアプリケーションを起動する
 * @params
 * urlRerouteOnly : デフォルトでtrue。trueに設定すると、クライアント側のルートが変更されない限り、history.pushState()およびの呼び出しhistory.replaceState()はシングルSPAリルートをトリガーしません。
 */
start({ urlRerouteOnly: true });
