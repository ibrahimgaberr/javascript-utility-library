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

// Example usage:
// --- Test Case 1: ---
const twoValues = memo((x, y) => x * y);
console.log(twoValues(2, 3)); // calculates and logs 6
console.log(twoValues(2, 3)); // logs 6 from cache

// --- Test Case 2: ---
const runFunction = (callback) => callback();
const memoizedRun = memo(runFunction);
console.log(memoizedRun(() => "Ibrahim"));
console.log(memoizedRun(() => "Ahmed"));
