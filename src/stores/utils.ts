import { getRandomInt } from "@/libs/utils";

import type { Category, Widget } from "./interfaces";

type WithPosition = { position: { x: number; y: number } };

export function addPosition<T extends WithPosition>(obj: T) {
  // have 4 - 6 sections
  // each widget is in that section
  // more than 6 widgets requires another screen
  const negativeX = getRandomInt(0, 1);
  const negativeY = getRandomInt(0, 1);
  const x = negativeX ? getRandomInt(-150, -25) : getRandomInt(25, 150);
  const y = negativeY ? getRandomInt(-150, -100) : getRandomInt(100, 150);
  return {
    ...obj,
    position: { x, y },
  };
}

export function updateWidgets(fn: (_: Widget) => Widget) {
  return function _updateWidgets(category: Category) {
    return {
      ...category,
      widgets: category.widgets.map(fn),
    };
  };
}
