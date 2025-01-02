export const convertSnakeToCamel = <T extends object>(obj: unknown): T => {
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

export const formatRuntime = (runtime: number) => {
  const hour = Math.floor(runtime / 60);
  const minute = runtime & 60;

  return hour > 0 ? `${hour}시간 ${minute}분` : `${minute}분`;
};

export const getReleasedYear = (releaseDate: string | number) => {
  return releaseDate.toString().slice(0, 4);
};
