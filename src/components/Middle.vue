<template>
  <div class="middle">
    <div class="middle__top">
      <div class="focus">
        <core
          @category-hover="handleCategoryHover"
          @category-click="handleCategoryClick"
        />
        <focus-widget
          v-for="widget in selectedCategory?.widgets"
          :key="widget.id"
          :position="widget.position"
        >
          <span>{{ widget.text }}</span>
        </focus-widget>
      </div>
    </div>
    <div class="middle__bottom">
      <text-display :text="displayText" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import FocusWidget from '@/components/FocusWidget.vue';
import Core from '@/components/Core.vue';
import TextDisplay from '@/components/TextDisplay.vue';
import type { GUID } from '@/libs/types';
import { useCategoryStore } from '@/stores/categoryStore';
import type { Category } from '@/store/interfaces';

type Data = {
  displayText: string;
  selectedCategory: Category | undefined;
};

export default defineComponent({
  components: {
    FocusWidget,
    Core,
    TextDisplay,
  },
  data(): Data {
    return {
      displayText: 'Good Morning, Sir.',
      selectedCategory: undefined,
    };
  },
  computed: mapState(useCategoryStore, ['getCategoryById']),
  methods: {
    handleCategoryHover(text: string) {
      const defaultDisplayText = 'Good Morning, Sir';
      this.displayText = text ?? this.selectedCategory?.name ?? defaultDisplayText;
    },
    handleCategoryClick(id: GUID) {
      this.selectedCategory = this.getCategoryById(id);
      if (this.selectedCategory && this.selectedCategory.widgets.length) {
        this.selectedCategory.widgets[0].position = { x: 0, y: 1 };
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.middle {
  display: flex;
  flex-direction: column;

  &__bottom {
    width: 100%;
  }
}

.focus {
  position: relative;
  height: $core-size + 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
}
</style>
