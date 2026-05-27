function executeOnce(fn) {
    let executed = false;
    let result;
    return function(...args) {
        if (!executed) {
            executed = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}
