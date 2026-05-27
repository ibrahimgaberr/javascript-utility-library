function memo(fn) {
  const cache = {};
  return function (...args) {
    const cacheKey = JSON.stringify(args);
    if (cache.hasOwnProperty(cacheKey)) {
      return cache[cacheKey];
    }
    const result = fn(...args);
    cache[cacheKey] = result;
    return result;
  };
}
