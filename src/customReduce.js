function customReduce(arr, callback, initialValue) {
    if (!Array.isArray(arr) || typeof callback !== "function") return undefined;
    if (arr.length === 1) return arr[0];
    let accumulator;
    let startIndex;
    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    }else {
        if (arr.length === 0) throw new TypeError("Reduce of empty array with no initial value");
        let i = 0;
        while (i < arr.length && !(i in arr)) {
            i++;
        }
        if (i === arr.length) throw new TypeError("Reduce of empty array with no initial value");
        accumulator = arr[i];
        startIndex = i + 1;
    }
    for (let i = startIndex, len = arr.length; i < len; i++) {
        if (i in arr) {
            accumulator = callback(accumulator, arr[i], i, arr);
        }
    }
    return accumulator;
}

//------------------------------------------------------------------------------------------------------------------------------
// Added to the prototype of Array
Array.prototype.customReduce = function(this, callback, initialValue) {
    if (!Array.isArray(this) || typeof callback !== "function") return undefined;
    if (this.length === 1) return this[0];
    let accumulator;
    let startIndex;
    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    }else {
        if (this.length === 0) throw new TypeError("Reduce of empty array with no initial value");
        let i = 0;
        while (i < this.length && !(i in this)) {
            i++;
        }
        if (i === this.length) throw new TypeError("Reduce of empty array with no initial value");
        accumulator = this[i];
        startIndex = i + 1;
    }
    for (let i = startIndex, len = this.length; i < len; i++) {
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}
// Example usage:
// --- Test Case 1: ---
// let num = [1, 2, 3, 4];
// let newNum = customReduce(num, (acc, curr) => { return acc + curr }, 5);
// console.log(newNum); 

// --- Test Case 2: ---
// let edgeCase = customReduce([], (acc, cur) => acc + cur);
// console.log(edgeCase);

// --- Test Case 3: ---
// let edgeCase1 = customReduce([5], (acc, cur) => acc + cur);
// console.log(edgeCase1);

// --- Test Case 4: ---
// let edgeCase2 = customReduce([ , , 3, , 50, , ,], (acc, cur) =>{ return acc + cur}, 1);
// console.log(edgeCase2);

// --- Test Case 5: ---
// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Mouse", price: 50 },
//     { name: "Keyboard", price: 50 }
// ];

// const total = customReduce(products, (acc, currentProduct) => {
//     return acc + currentProduct.price;
// },0);

// console.log(total);