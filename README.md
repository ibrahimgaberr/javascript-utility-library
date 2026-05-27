# JavaScript Utilities

A lightweight JavaScript utility library built from scratch to deeply understand core JavaScript concepts without relying on built-in array methods.

This library focuses on problem-solving, closures, async flow, and JavaScript.

---

## Features
- Custom implementations of common array utilities
- No usage of built-in array methods (`map`, `filter`, `reduce`, etc.)
- Fully handled edge cases
- Pure JavaScript with no external dependencies

---

## Project Structure
src/
  compose.js
  createCounter.js
  createSecretHolder.js
  customFilter.js
  customGroupBy.js
  customMap.js
  customReduce.js
  deepClone.js
  eventEmitter.js
  executeOnce.js
  flattenArray.js
  memoize.js
  pipeAsync.js

README.md
PROBLEMS.md
WeirdJS.md

---

## Concepts Covered
- Functions & Closures
- Custom utilities (map, filter, reduce, groupBy)
- Memoization & once pattern
- Deep cloning
- Async flow (`pipeAsync`)
- Event Emitter pattern
- Weird JavaScript behaviors

---

## Installation & Usage Example
```bash
npm install js-utilities-core

---

import { customMap } from "js-utilities-core";

const nums = [1, 2, 3];
const result = customMap(nums, n => n * 2);

console.log(result);  [2, 4, 6]