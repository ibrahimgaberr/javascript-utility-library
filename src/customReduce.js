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
