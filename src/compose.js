function compose(...fns) {
  if (fns.length === 0) return (value) => value;
  for (let i = 0, len = fns.length; i < len; i++) {
    if (typeof fns[i] !== "function")
      throw new TypeError("Expected all arguments to be functions");
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
