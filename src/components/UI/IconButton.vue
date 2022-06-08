<template>
  <div class="icon-button">
    <fa-icon :icon="['fal', icon]" size="lg" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.icon-button {
  // position: absolute;
  height: 25px;
  width: 25px;
  color: white;
  border: 1px solid white;
  padding: 10px;
  border-radius: 100%;
}
</style>
