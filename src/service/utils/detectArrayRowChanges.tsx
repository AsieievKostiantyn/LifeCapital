import { FieldChangeStatus } from '../../types/db';

export type ArrayChangeMap<T> = Record<
  number,
  Partial<Record<keyof T, FieldChangeStatus>>
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function detectArrayRowChanges<T extends Record<string, any>>(
  prev: T[],
  next: T[]
): ArrayChangeMap<T> {
  const changeMap: ArrayChangeMap<T> = {};

  const maxLen = Math.max(prev.length, next.length);

  for (let i = 0; i < maxLen; i++) {
    const prevRow = prev[i] || {};
    const nextRow = next[i] || {};

    const fieldChanges: Partial<Record<keyof T, FieldChangeStatus>> = {};

    for (const key of Object.keys(nextRow) as (keyof T)[]) {
      if (!prevRow[key] && nextRow[key]) {
        fieldChanges[key] = 'added';
      } else if (prevRow[key] && !nextRow[key]) {
        fieldChanges[key] = 'removed';
      } else if (prevRow[key] !== nextRow[key]) {
        fieldChanges[key] = 'changed';
      }
    }

    if (Object.keys(fieldChanges).length > 0) {
      changeMap[i] = fieldChanges;
    }
  }

  return changeMap;
}
