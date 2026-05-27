function customDeepClone(originalValue, memory = []) { // use memory to solve the circular reference problem that will case infinity loop
    
  if (originalValue === null || typeof originalValue !== "object") return originalValue;

  for (let i = 0, len = memory.length; i < len; i++) {
    if (memory[i].original === originalValue) {
      return memory[i].cloned;
    }
  }

  // Handle special objects date, regex because both of them doesn't saved as normal object and they have their own constructor and methods
  if (originalValue instanceof Date) return new Date(originalValue.getTime());

  if (originalValue instanceof RegExp) return new RegExp(originalValue.source, originalValue.flags);

//  Handle special objects Set and Map because both of them are iterable and they have their own methods and they are not saved as normal object 
  if (originalValue instanceof Set) {
    const clone = new Set();
    memory.push({ original: originalValue, cloned: clone });
    for (const item of originalValue) {
      clone.add(customDeepClone(item, memory));
    }
    return clone;
  }

  if (originalValue instanceof Map) {
    const clone = new Map();
    memory.push({ original: originalValue, cloned: clone });
    for (const [key, value] of originalValue) {
      clone.set(customDeepClone(key, memory), customDeepClone(value, memory));
    }
    return clone;
  }

  if (Array.isArray(originalValue)) {
    const clone = [];
    memory.push({ original: originalValue, cloned: clone });
    for (let i = 0, len = originalValue.length; i < len; i++) {
      clone[i] = customDeepClone(originalValue[i], memory);
    }
    return clone;
  }

  const clone = {};
  memory.push({ original: originalValue, cloned: clone });
  for (const key of Object.keys(originalValue)) {
    clone[key] = customDeepClone(originalValue[key], memory);
  }
  return clone;
}

// Example usage:
// --- Test Case 1: ---
const details = {
  name: "Ibrahim",
  skills: ["Angular", "RxJS"],
  projectDetails: {
    title: "Dashboard",
    year: 2026,
  },
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

const clone = customDeepClone(details);
clone.skills.push("NestJS");
clone.projectDetails.title = "Portal";

console.log(details.skills);
console.log(details.projectDetails.title);

console.log(clone);
console.log(clone.skills);
console.log(clone.projectDetails.title);
console.log(clone.email);

// Example usage:
// --- Test Case 2: ---
const task = {
  title: "Dashboard",
  dueDate: new Date("2026-06-01")
};

const clonedTask = customDeepClone(task);
clonedTask.dueDate.setMonth(7);
console.log(task.dueDate.toISOString())
console.log(clonedTask.dueDate.toISOString());
