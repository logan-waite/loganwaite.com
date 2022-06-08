<template>
  <div class="focus">
    <core
      @category-hover="$emit('category-hover', $event)"
      @category-click="$emit('category-click', $event)"
    />
    <widget :position="{ x: -100, y: 100 }">
      <span>Upper Left</span>
    </widget>
    <widget :position="{ x: 100, y: 100 }">
      <span>Upper Right</span>
    </widget>
    <widget :position="{ x: 100, y: -100 }">
      <span>Lower Right</span>
    </widget>
    <widget :position="{ x: -100, y: -150 }">
      <span>Lower Left</span>
    </widget>
  </div>
</template>

<script>
import Widget from "@/components/FocusWidget.vue";
import Core from "@/components/Core.vue";

export default {
  components: {
    Widget,
    Core,
  },
  emits: ["category-hover", "category-click"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.focus {
  position: relative;
  height: $core-size + 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
}
</style>
