function executeOnce(fn) {
    let executed = false;
    let result;
    return function(...args) {
        if (!executed) {
            executed = true;
            // apply to fire the function with the correct context and arguments
            result = fn.apply(this, args);
        }
        return result;
    };
}

// Example usage:
// --- Test Case 1: ---
let executeExampleOnce = executeOnce(() => console.log("This will only be logged once."));
executeExampleOnce(); // Logs: This will only be logged once.
executeExampleOnce(); // No output, as the function has already been executed once.

// --- Test Case 2: ---
let count = 0;
let incrementOnce = executeOnce(() => count++);
incrementOnce(); // count = 1
incrementOnce(); // count remains 1, as the function is not executed again
console.log(count); 