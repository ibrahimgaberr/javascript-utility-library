function createCounter(initialValue = 0) {
  if (typeof initialValue !== "number") throw new TypeError("Initial value must be a number");
  let count = initialValue;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    reset() {
      count = initialValue;
      return count;
    },
  };
}
