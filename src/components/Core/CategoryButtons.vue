<template>
  <div class="category-buttons">
    <icon-button
      v-for="category in categories"
      :key="category.id"
      :icon="category.icon"
      class="button"
      @mouseenter="$emit('hover', category.name)"
      @mouseleave="$emit('hover')"
      @click="$emit('click', category.id)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { useCategoryStore } from '@/stores/categoryStore';
import IconButton from '@/components/UI/IconButton.vue';

export default defineComponent({
  components: {
    IconButton,
  },
  emits: ['hover', 'click'],
  computed: mapState(useCategoryStore, ['categories']),
});
</script>

<style lang="scss" scoped>
@use "sass:math" as math;
@import "@/scss/variables";

$radius: math.div($core-size, 2.5);
$buttons: 5;
$division: math.div(360, $buttons);

.category-buttons {
  position: absolute;
  height: 100%;
  width: 100%;
}
.button {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -23px;
  margin-top: -23px;
  opacity: 0;
  cursor: pointer;

  @for $i from 0 to $buttons {
    $angle: $division * $i + 0deg;
    &:nth-child(#{$i + 1}) {
      animation: power-on 0.25s linear #{math.div($i, $buttons)}s forwards;
      transform: translate(
        #{$radius * math.sin($angle)}px,
        #{- ($radius * math.cos($angle))}px
      );
    }
  }
}

@keyframes power-on {
  0% {
    opacity: 0;
    transform: translate(0px, 0px);
  }
  50% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  100% {
    opacity: 1;
  }
}
</style>
