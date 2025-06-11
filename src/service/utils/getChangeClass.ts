import { FieldChangeMap } from '../../types/db';

type ChangedClassValue = 'changed' | 'added' | 'removed' | '';

export const getChangeClass = <T>(
  key: keyof T,
  changes: FieldChangeMap<T>
): ChangedClassValue => {
  switch (changes[key]) {
    case 'changed':
      return 'changed';
    case 'added':
      return 'added';
    case 'removed':
      return 'removed';
    default:
      return '';
  }
};

export const stableStringify = (obj: any): string => {
  const normalize = (value: any): any => {
    if (Array.isArray(value)) {
      // 🔹 Сортуємо масиви об’єктів за id, якщо є
      return value
        .map((v) => normalize(v))
        .sort((a, b) => {
          if (a.id !== undefined && b.id !== undefined) {
            return a.id - b.id;
          }
          return JSON.stringify(a).localeCompare(JSON.stringify(b));
        });
    }

    if (value && typeof value === 'object') {
      const sortedObj: Record<string, any> = {};
      const keys = Object.keys(value).sort();
      for (const key of keys) {
        sortedObj[key] = normalize(value[key]);
      }
      return sortedObj;
    }

    return value;
  };

  const normalized = normalize(obj);
  return JSON.stringify(normalized);
};
