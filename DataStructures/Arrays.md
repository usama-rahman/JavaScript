# Working With Arrays

---

- [Simple Array Methods](#simple-array)
- [The new at Method](#at-method) `.at`

---

## At Method

```js
const arr = [43, 78, 22];

console.log(arr[0]);
console.log(arr.at(0));

// Getting last array element

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
```

---

## Simple Array

```js
// Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE

// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse

let arr1 = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

// Concat

const letters = arr1.concat(arr2);
console.log(letters);
console.log([...arr1, ...arr2]);

// Join

console.log(letters.join(' - '));
```
