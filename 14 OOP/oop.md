# Object-Oriented Programming (OOP) With JavaScript

---

- [Constructor Functions and the new Operator](#) `new`

---

#### Constructor Functions and the new Operator

1.  New function {} is Created
2.  function is called , this = {}
3.  {} linked to prototype
4.  function automatically return {}

```js
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const john = new Person("John", 1995);
console.log(john);
```
