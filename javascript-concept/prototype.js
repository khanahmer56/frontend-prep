// 1. What is a Prototype?

// In JavaScript, every object has a hidden internal property called [[Prototype]] (often accessed using __proto__ or Object.getPrototypeOf(obj)).

// That prototype is just another object, which can hold shared properties and methods.

// If you try to access a property on an object and it’s not found, JS looks up the prototype chain.

// 👉 Example:

// const user = { name: "Ahmer" };
// console.log(user.toString()); // "[object Object]"

// user itself doesn’t have a toString method.

// JS looks at user.__proto__ → which is Object.prototype → finds toString.

// So, Object.prototype is the root prototype for most objects.

// 2. Prototype Chain

// Every object can have a prototype, and that prototype can have its own prototype → forming a chain.

// At the end of the chain is always null.

// 👉 Example:

// const arr = [1, 2, 3];

// console.log(arr.__proto__ === Array.prototype);       // true
// console.log(arr.__proto__.__proto__ === Object.prototype); // true
// console.log(arr.__proto__.__proto__.__proto__);       // null

// So chain is:
// arr → Array.prototype → Object.prototype → null

// 3. Prototypical Inheritance

// It means: objects inherit properties and methods from their prototype.

// 👉 Example:

// function Person(name) {
//   this.name = name;
// }

// // Adding method to prototype
// Person.prototype.sayHello = function() {
//   console.log(`Hello, I am ${this.name}`);
// };

// const p1 = new Person("Ahmer");
// p1.sayHello(); // "Hello, I am Ahmer"

// p1 doesn’t have sayHello directly.

// JS checks p1.__proto__ (which is Person.prototype) → finds sayHello.

// 4. Why use Prototypes?

// Without prototypes, every instance would carry its own copy of methods → waste of memory.

// With prototypes, methods are stored once and shared across all instances.
