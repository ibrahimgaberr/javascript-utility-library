function customFilter(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== "function") return [];
  let newArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i in arr) {
      const currentValue = arr[i];
      if (callback(currentValue, i, arr)) {
        newArr.push(currentValue);
      }
    }
  }
  return newArr;
}
//------------------------------------------------------------------------------------------------------------------------------
// Added to the prototype of Array
Array.prototype.customFilterProtoType = function (callback) {
  if (typeof callback !== "function") return [];
  let newArr = [];
  for (let i = 0, len = this.length; i < len; i++) {
    if (i in this) {
      if (callback(this[i], i, this)) {
        newArr.push(this[i]);
      }
    }
  }
  return newArr;
};
