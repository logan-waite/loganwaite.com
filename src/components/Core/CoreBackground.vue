<template>
  <div class="circle background" :class="{ idle: !isActive }" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { isActive: { type: Boolean, default: false } },
});
</script>

<style lang="scss" scoped>
.background {
  width: 95%;
  height: 95%;
  display: block;
  position: absolute;
  border-radius: 214px;
  background: radial-gradient(#000, #0ff);
  box-shadow: 0px 0px 35px rgb(0, 255, 255);
  opacity: 0.5;
  width: 100%;
  height: 100%;
}

.background.idle {
  animation: opacity 7s infinite linear;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0.25;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
