import { FieldChangeMap } from '../../types/db';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function detectFieldChanges<T extends Record<string, any>>(
  prev: T,
  next: T
): FieldChangeMap<T> {
  const changes: FieldChangeMap<T> = {};

  const allKeys = new Set([...Object.keys(prev), ...Object.keys(next)]);

  for (const key of allKeys) {
    const oldVal = prev[key];
    const newVal = next[key];

    if (!oldVal && newVal) {
      changes[key as keyof T] = 'added';
    } else if (oldVal && !newVal) {
      changes[key as keyof T] = 'removed';
    } else if (oldVal !== newVal) {
      changes[key as keyof T] = 'changed';
    }
  }

  return changes;
}
