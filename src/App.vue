<script setup lang="ts">
import HomeView from '@/views/HomeView.vue';
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/categoryStore';

onMounted(() => {
  const store = useCategoryStore();
  store.getCategories();
});
</script>

<template>
  <HomeView />
</template>

<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
