function flattenArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("value must be an array");
  let result = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      let flattenInner = flattenArray(arr[i]);
      for (let j = 0, innerLen = flattenInner.length; j < innerLen; j++) {
        result.push(flattenInner[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

//------------------------------------------------------------------------------------------------------------------------------
// Added to the prototype of Array
// Array.prototype.flattenArray = function () {
//   if (!Array.isArray(this)) throw new TypeError("value must be an array");
//   let result = [];

//   for (let i = 0, len = this.length; i < len; i++) {
//     if (Array.isArray(this[i])) {
//       let flattenInner = flattenArray(this[i]);
//       for (let j = 0, innerLen = flattenInner.length; j < innerLen; j++) {
//         result.push(flattenInner[j]);
//       }
//     } else {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };
