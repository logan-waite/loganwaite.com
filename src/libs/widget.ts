import { clampMin } from '@/libs/utils';
// import * as R from 'ramda';

type Rect = {
  height: number;
  top: number;
  width: number;
  left: number;
}

export type Coords = {x: number; y: number};

const coreRadius = 100;

export function getSvgDimensions(distance: Coords, position: Coords, widget: HTMLDivElement): Rect {
  const height = distance.y;
  const top = widget.offsetHeight;
  const width = widget.offsetWidth + distance.x;
  const left = position.x;

  return {
    height, top, width, left,
  };
}

function calculateEndPoint(mid: Coords, target: Coords, position: Coords) {
  const direction = {
    x: position.x < 0 ? -1 : 1,
    y: position.y < 0 ? -1 : 1,
  };
  const slope = (target.y - mid.y) / (target.x - mid.x);

  if (slope === 0) {
    return {
      x: target.x + coreRadius * -direction.x,
      y: target.y,
    };
  } if (Math.abs(slope) === Infinity) {
    return {
      x: target.x,
      y: target.y + coreRadius * -direction.y,
    };
  }
  const dx = coreRadius / Math.sqrt(1 + slope ** 2);
  const dy = slope * dx;

  return {
    x: target.x + dx * direction.x,
    y: target.y + dy * direction.x,
  };
}

export function findLinePoints(
  position: Coords,
  distance: Coords,
  svg: Rect,
  widget: {width: number; height: number},
) {
  // the part under the content
  const start = {
    x: position.x < 0 ? 0 : svg.width,
    y: position.y < 0 ? distance.y : 0,
  };

  // where the line bends
  const mid = {
    x: position.x < 0 ? widget.width : svg.width - widget.width,
    y: position.y < 0 ? distance.y : 0,
  };

  // center of core radius
  const target = {
    x: position.x < 0 ? svg.width : 0,
    y: position.y < 0 ? 0 : svg.height,
  };

  // where we want the line to actually end
  const end = calculateEndPoint(mid, target, position);

  return { start, mid, end };
}
