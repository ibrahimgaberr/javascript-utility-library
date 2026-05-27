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

// Example usage:
// --- Test Case 1: ---

// let addOne = async (x) => x + 1;
// let multiply = async (x) => x * 2;
// let square = async (x) => x * x;
// let result = asyncPipe(addOne, multiply, square);

// result(2).then(finalResult => console.log(finalResult)); 

// --- Test Case 2: ---
const addTaxAsync = async (price) => {
    return new Promise(resolve => setTimeout(() => resolve(price + 5), 1000));
};

const applyDiscountAsync = async (price) => {
    return new Promise(resolve => setTimeout(() => resolve(price - 2), 1000));
};

const formatCurrencyAsync = async (price) => {
    return new Promise(resolve => setTimeout(() => resolve(`price: ${price}`), 1000));
};

let result = asyncPipe(addTaxAsync, applyDiscountAsync, formatCurrencyAsync);
result(100).then(finalResult => console.log(finalResult));
