function createCounter(initialValue = 0) {
  if (typeof initialValue !== "number")
    throw new Error("Initial value must be a number");
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

// Example usage:
// --- Test Case 1: ---
const counter = createCounter(10);

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
