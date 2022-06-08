<template>
  <div class="home">
    <div class="left" />
    <middle />
    <div class="right" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Middle from '@/components/Middle.vue';

export default defineComponent({
  components: {
    Middle,
  },
});
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  background-color: #101010;
  display: flex;
}

.middle {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left,
.right {
  width: 100px;
  flex: 1;
}
</style>
