function customMap(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== "function") return [];

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

// Example usage:
// --- Test Case 1: ---
const numbers = [1, 2, 3, 4];
const doubled = customMap(numbers, (num) => num * 2);
console.log(doubled); 
// --- Test Case 2: ---

const participants = ["Ahmed", "Sara", "Ali"];
const leaderBoard = customMap(participants, (value, index) => `Rank #${index + 1}: ${value}`);
console.log(leaderBoard);
// --- Test Case 3: ---

const holedArray = [5, , 15, , 25]; 
const mappedHoledArray = customMap(holedArray, (value) => value * 10);
console.log(mappedHoledArray);

//------------------------------------------------------------------------------------------------------------------------------
// Added to the prototype of Array
Array.prototype.customMapPrototype = function (callback) {
  if (typeof callback !== "function") return [];
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

//------------------------------------------------------------------------------------------------------------------------------

/**
 *   if (!Array.isArray(arr) || typeof callback !== 'function') return []; dah lazmto t2kd eny bt3aml m3a array w function f3lan
 *  let newArr = [];  dah 3shan a7ot feh el results elly hay returnha el callback
 * for (let i = 0, len = arr.length; i < len; i++) { dah 3shan a3ml loop 3ala el array
 * if (i in arr) { dah 3shan a2dr at3aml m3a el arrays elly feha holes w a2dr a5od el values elly feha w l hole mt2sarsh 3lya wan sha8l
 * let result = callback(arr[i], i, arr); dah 3shan a3ml call lel callback w a5od el result w a7otoh fe el newArr w hna l trtyb dah mn l js bon2n 3la a8lbyt l est8dam mash mn dma8y
 * newArr.push(result); dah 3shan a7ot el result fe el newArr
 * return newArr; dah 3shan a return el array elly feha el results
 * Note: l if (i in arr) law "" l js ht7wlha l 0 w kda htgbly kymt l mawgod fe index 0 bas dah mash hy7sl hna 3ashan l for loop
 */
