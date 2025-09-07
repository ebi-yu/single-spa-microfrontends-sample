<template>
  <div id="vue-app">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <!-- root-configからのメッセージを表示 -->
        <p v-if="props.message" class="root-message">{{ props.message }}</p>
      </div>
    </header>

    <div>
      <TheWelcome />
      <!-- React アプリケーション用のコンテナ -->
    </div>
    <div id="react-app-container">
      <h3>React App (mounted via mountParcel):</h3>
      <!-- Reactアプリがここにマウントされる -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

const props = defineProps<{
  mountParcel?: (config: any, props: any) => any;
  message?: string;
}>();

const reactParcel = ref<any>(null);

onMounted(async () => {
  try {
    const reactAppModule = await System.import("react-app");
    const domElement = document.getElementById("react-app-container");
    if (domElement && reactAppModule && props.mountParcel) {
      reactParcel.value = props.mountParcel(reactAppModule, {
        domElement,
        customProps: {
          message: "Hello from Vue app!",
        },
      });
    } else {
      console.warn("mountParcel prop is not available or domElement not found");
    }
  } catch (error) {
    console.error("Failed to load or mount react-app:", error);
  }
});

defineExpose({
  HelloWorld,
  TheWelcome,
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.root-message {
  font-weight: bold;
  color: #42b883;
  margin: 1rem 0;
}

#react-app-container {
  margin-top: 2rem;
  padding: 1rem;
  border: 2px dashed #ccc;
  border-radius: 8px;
  background-color: darkslategrey;
  grid-column: span 2;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
