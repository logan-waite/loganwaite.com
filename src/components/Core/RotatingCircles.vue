<template>
  <div class="circle outer" :class="{ active: isActive, idle: !isActive }">
    <div class="circle inner" :class="{ active: isActive, idle: !isActive }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isActive: {
      default: false,
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" scoped>
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.outer {
  width: 85%;
  height: 85%;
  border: 10px inset rgb(133, 224, 242);
  background: transparent;
  border-radius: 100%;
  box-shadow: 0px 0px 2px white;
}

.inner {
  width: 85%;
  height: 85%;
  border: 8px outset rgb(133, 224, 242);
  background: transparent;
  border-radius: 100%;
  box-shadow: 0px 0px 2px white;
}
.inner.active {
  animation: rotate 2s infinite linear;
}
.outer.active {
  animation: rotate-rev 5s infinite linear;
}
.idle {
  animation: opacity 7s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-rev {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes opacity {
  0% {
    opacity: 0.5;
  }
  40% {
    opacity: 0.75;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
