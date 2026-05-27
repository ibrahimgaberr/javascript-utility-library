function groupBy(arr, property) {
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

//------------------------------------------------------------------------------------------------------------------------------
// Added to the prototype of Array

Array.prototype.groupBy = function (property) {
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
