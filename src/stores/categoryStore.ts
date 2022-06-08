import { defineStore } from 'pinia';
import * as R from 'ramda';
import { addId } from '@/libs/utils';
import type { GUID } from '@/libs/types';
import { updateWidgets, addPosition } from './utils';
import type { Category } from './interfaces';

export const useCategoryStore = defineStore('categoryStore', {
  state: (): { categories: Category[] } => ({
    categories: [],
  }),
  getters: {
    getCategoryById: (state) => (id: GUID) => state.categories.find((c) => c.id === id),
  },
  actions: {
    async getCategories() {
      const response = await fetch('/data/categories.json');
      const categories = ((await response.json()) as Category[]).map(
        R.pipe(addId, updateWidgets(R.pipe(addId, addPosition))),
      );
      console.log(categories);
      this.categories = categories;
    },
  },
});
