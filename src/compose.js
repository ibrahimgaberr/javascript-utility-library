function compose(...fns) {
  if (fns.length === 0) return (value) => value;
  for (let i = 0, len = fns.length; i < len; i++) {
    if (typeof fns[i] !== "function")
      throw new TypeError("Expected a function");
  }
  return function (...args) {
    let length = fns.length;
    let result = fns[length - 1].apply(this, args);
    for (let i = length - 2; i >= 0; i--) {
      result = fns[i].call(this, result);
    }
    return result;
  };
}

// Example usage:
// --- Test Case 1: ---
let firstFn = function (num) {
  return num + 1;
};
let secondFn = function (num) {
  return num * 2;
};
const result = compose(firstFn, secondFn)(5);

console.log(result);

// --- Test Case 2: ---
const addHello = (str) => "Hello " + str;
const upperCase = (str) => str.toUpperCase();
const addExclamation = (str) => str + "!";
const greet = compose(addHello, upperCase, addExclamation);

console.log(greet("ahmed"));

// --- Test Case 3: ---
const calculator = {
    baseNumber: 10,
    
    add(num) {
        return this.baseNumber + num; 
    },
    multiply(num) {
        return num * 2;
    }
};
const superFunc = compose(calculator.multiply, calculator.add);
console.log(superFunc.call(calculator, 5));
