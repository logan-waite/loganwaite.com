import * as R from "ramda";

export const clampMin = R.curry((min: number, val: number) =>
  R.clamp(min, Number.MAX_SAFE_INTEGER, val)
);
export const clampMax = R.clamp(Number.MIN_SAFE_INTEGER);

// UUID Generator from https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
export function uuidv4(): string {
  /* eslint-disable */
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0; 
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type WithId = { id: string };

export function addId<T extends WithId>(obj: T) {
  return {
    ...obj,
    id: uuidv4(),
  };
}
