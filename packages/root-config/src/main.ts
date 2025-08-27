import { registerApplication, start } from "single-spa";

/**
 * マイクロフロントエンドアプリケーションの登録を行う
 * @params
 * name : アプリケーションの名前
 * app : 登録したいsingle-spaアプリケーションを渡す
 * activeWhen : 指定したURLにアクセスした時のみ、マイクロフロントエンドアプリケーションが活性化する。
 * customProps : 任意の値をアプリケーション渡せる。
 */
registerApplication<Record<string, never>>({
  name: "vue-app",
  app: async () => System.import("vue-app"),
  activeWhen: ["/vue"],
  customProps: {},
});
registerApplication<Record<string, never>>({
  name: "react-app",
  app: async () => System.import("react-app"),
  activeWhen: ["/react"],
  customProps: {},
});

/**
 * マイクロフロントエンドアプリケーションを起動する
 * @params
 * urlRerouteOnly : デフォルトでtrue。trueに設定すると、クライアント側のルートが変更されない限り、history.pushState()およびの呼び出しhistory.replaceState()はシングルSPAリルートをトリガーしません。
 */
start({ urlRerouteOnly: true });
