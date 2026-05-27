function asyncPipe(...fns) {
    if(fns.length === 0) throw new Error('At least one function must be provided');
    for(let i = 0, len = fns.length; i < len; i++) {
        if(typeof fns[i] !== 'function') throw new TypeError('All arguments must be functions');
    }
    return async function(initialValue) {
        let result = await initialValue;
        for(let i = 0, len = fns.length; i < len; i++) {
            try {
                result = await fns[i].call(this, result);
            } catch (error) {
                throw new Error(`Error occurred in function at index ${i}`);
            }
        }
        return result;
    }
}
