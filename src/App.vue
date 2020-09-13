<template>
  <div id="app">
    <Transactions />
  </div>
</template>

<script>
import Transactions from "./components/Transactions.vue";

export default {
  name: "App",
  components: {
    Transactions
  }
};
</script>

<style>
#app {
  box-sizing: border-box;
  max-width: 100vw;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #787c79;
}
</style>
