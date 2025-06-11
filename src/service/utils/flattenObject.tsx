export function flattenObject(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any,
  prefix = '',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: Record<string, any> = {}
) {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenObject(value, newKey, res);
    } else {
      res[newKey] = value;
    }
  }

  return res;
}
