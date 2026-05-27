function customMap(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== "function") throw new TypeError("Invalid arguments");;

  let newArr = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (i in arr) {
      let result = callback(arr[i], i, arr);
      newArr.push(result);
    } else {
      newArr.length++;
    }
  }
  return newArr;
}

//------------------------------------------------------------------------------------------------------------------------------
// Added to the prototype of Array
Array.prototype.customMapPrototype = function (callback) {
  if (typeof callback !== "function") throw new TypeError("Invalid arguments");;
  let newArr = [];
  for (let i = 0, len = this.length; i < len; i++) {
    if (i in this) {
      let result = callback(this[i], i, this);
      newArr.push(result);
    } else {
      newArr.length++;
    }
  }
  return newArr;
};
