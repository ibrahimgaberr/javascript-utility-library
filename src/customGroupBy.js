function customGroupBy(arr, property) {
  if (!Array.isArray(arr) || typeof property !== "string") return {};
  let groupedResult = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    const ele = arr[i];

    if (typeof ele !== "object" || ele === null) continue;


    let key = ele[property];

    if (key === undefined || key === null) {
      key = "unknown";
    }

    if (typeof key !== "string" && typeof key !== "number") {
      key = String(key);
    }

    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      key = "unknown";
    }

    if (!Object.prototype.hasOwnProperty.call(groupedResult, key)) {
      groupedResult[key] = [];
    }
    
    groupedResult[key].push(ele);
  }
  return groupedResult;
}
// function customGroupBy(arr, property) {
//   if (!Array.isArray(arr) || typeof property !== "string") return {};
//   let groupedResult = Object.create(null);
//   for (let i = 0, len = arr.length; i < len; i++) {
//     const ele = arr[i];

//     if (typeof ele !== "object" || ele === null) continue;


//     let key = ele[property];

//     if (key === undefined || key === null) {
//       key = "unknown";
//     }

//     if (typeof key !== "string" && typeof key !== "number") {
//       key = String(key);
//     }

//     if (!(key in groupedResult)) {
//       groupedResult[key] = [];
//     }

//     groupedResult[key].push(ele);
//   }
//   return groupedResult;
// }

//------------------------------------------------------------------------------------------------------------------------------
// Added to the prototype of Array

Array.prototype.customGroupBy = function (property) {
  if (!Array.isArray(this) || typeof property !== "string") return {};
  let groupedResult = {};
  for (let i = 0, len = this.length; i < len; i++) {
    const ele = this[i];

    if (typeof ele !== "object" || ele === null) continue;

    let key = ele[property];

    if (key === undefined || key === null) {
      key = "unknown";
    }

    if (typeof key !== "string" && typeof key !== "number") {
      key = String(key);
    }
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      key = "unknown";
    }
    if (!Object.prototype.hasOwnProperty.call(groupedResult, key)) {
      groupedResult[key] = [];
    }
    groupedResult[key].push(ele);
  }
  return groupedResult;
};
//------------------------------------------------------------------------------------------------------------------------------
// Example usage:
// --- Test Case 1: ---
const products = [
  { name: "iPhone", category: "Electronics" },
  { name: "T-Shirt", category: "Clothes" },
  { name: "Samsung S24", category: "Electronics" },
  { name: "Jeans", category: "Clothes" },
];

const groupedProducts = customGroupBy(products, "category");
console.log(groupedProducts);

// Example usage:
// --- Test Case 2: ---
const person = [
  { name: "Ahmed", age: 22 },
  { name: "Ali", age: 19 },
  { name: "Sara", age: 22 },
];

const groupedByAge = customGroupBy(person, "age");
console.log(groupedByAge);

// Example usage:
// --- Test Case 3: ---
const edgeCaseArr = [
  { name: "iPhone", category: "__proto__" },
  { name: "T-Shirt" },
  { name: "Samsung S24", category: null },
  { name: "Jeans", category: "Clothes" },
];

const edgeCase = customGroupBy(edgeCaseArr, "category");
console.log(edgeCase);

// --- Test Case 4: ---
const edgeCaseArr2 = [
  { name: "iPhone", category: "__proto__" },
  { name: "T-Shirt" },
  { name: "Samsung S24", category: hasOwnProperty },
  { name: "Jeans", category: "Clothes" },
];

const edgeCase2 = customGroupBy(edgeCaseArr2, "category");
console.log(edgeCase2);
