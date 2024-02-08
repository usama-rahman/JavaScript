"use strict";

// 14 - Object-Oriented Programming (OOP) With JavaScript

////////////////////////////////////////

// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const john = new Person("John", 1995);
console.log(john);

// 1. New function {} is Created
// 2. function is called , this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
