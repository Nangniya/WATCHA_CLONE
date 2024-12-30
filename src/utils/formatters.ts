export const convertSnakeToCamel = <T>(obj: unknown): T => {
  if (obj === null || typeof obj !== 'object') return obj as T;

  if (Array.isArray(obj)) {
    return obj.map((item) => convertSnakeToCamel<T>(item)) as T;
  }

  return Object.keys(obj as Record<string, unknown>).reduce((result: Record<string, unknown>, key) => {
    const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    const value = (obj as Record<string, unknown>)[key];
    result[camelKey] = convertSnakeToCamel<T>(value);
    return result;
  }, {}) as T;
};
