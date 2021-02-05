<template>
  <div>
    <axios></axios>
    <custom-hooks></custom-hooks>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Axios from './components/Axios.vue';
import CustomHooks from './components/CustomHooks.vue';

export default defineComponent({
  name: 'App',
  components: {
    Axios,
    CustomHooks,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>