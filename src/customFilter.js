function customFilter(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== "function") return [];
  let newArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i in arr) {
      const currentValue = arr[i]; // 3ashan law l user 7awl y8yr l index value gwa l if myfr2sh m3aya w yfdl m3a l value l asasya fl current value
      if (callback(currentValue, i, arr)) {
        // hna 5lto ynfz l code w bon2n 3la law l code tmm gwa l callback byrg3 true w law l2 yarg3 false ll if
        newArr.push(currentValue);
      }
    }
  }
  return newArr;
}
//hna fe moshkla fl currentValue mash fhm lazmtha 
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

// Example usage:
// --- Test Case 1: ---
const users = [
  { name: "Ahmed", age: 22 },
  { name: "Ali", age: 19 },
  { name: "Sara", age: 28 },
];
let adults = users.customFilterProtoType((user) => user.age >= 20);
console.log(adults);
