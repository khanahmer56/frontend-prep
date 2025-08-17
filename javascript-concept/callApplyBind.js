// 1. Why do we need them?

// In JS, this depends on how a function is called, not where it’s defined.
// Sometimes you want to control what this refers to → that’s where call, apply, and bind come in.

// 2. call

// Immediately invokes the function with a specified this and arguments.

// Syntax:

// func.call(thisArg, arg1, arg2, ...)

// 👉 Example:

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const user = { name: "Ahmer" };

// greet.call(user, "Hello", "!");
// // "Hello, Ahmer!"

// Here, this inside greet points to user.

// 3. apply

// Almost the same as call, but arguments are passed as an array.

// Syntax:

// func.apply(thisArg, [argsArray])

// 👉 Example:

// greet.apply(user, ["Hi", "!!"]);
// // "Hi, Ahmer!!"

// 💡 Use apply when you already have arguments in an array.

// 👉 Example: Math.max with array

// const nums = [5, 10, 2];
// console.log(Math.max.apply(null, nums)); // 10

// 4. bind

// Doesn’t execute the function immediately.

// Instead, it returns a new function with this permanently set.

// Syntax:

// const newFunc = func.bind(thisArg, arg1, arg2, ...);

// 👉 Example:

// const greetAhmer = greet.bind(user, "Hey");
// greetAhmer("?"); // "Hey, Ahmer?"

// bind is great when you want to save a function to call later with a fixed this.

// 5. Differences
// Feature	call	apply	bind
// Executes immediately?	✅ Yes	✅ Yes	❌ No (returns a new function)
// Arguments format	List (a, b, c)	Array ([a, b, c])	List (a, b, c) or partial args
// Returns	Function’s return value	Function’s return value	A new bound function
// 6. Real-world Use Cases
// ✅ call

// Borrowing methods from another object.

// const person1 = { name: "Ahmer" };
// const person2 = { name: "Khan" };

// function sayName() {
//   console.log(this.name);
// }

// sayName.call(person1); // Ahmer
// sayName.call(person2); // Khan

// ✅ apply

// Useful for functions expecting arrays of arguments.

// const numbers = [4, 7, 1, 9];
// console.log(Math.max.apply(null, numbers)); // 9

// ✅ bind

// Often used in event handlers or callbacks, especially in React (before arrow functions were common).

// class Button {
//   constructor(name) {
//     this.name = name;
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     console.log(`${this.name} clicked`);
//   }
// }

// const b = new Button("Submit");
// setTimeout(b.handleClick, 1000); // "Submit clicked"

// Without bind, this would be lost when passed to setTimeout.

// 7. Arrow Functions & this

// Arrow functions do not have their own this.

// They capture this from the lexical scope, so call/apply/bind don’t affect them.

// 👉 Example:

// const arrow = () => console.log(this);
// arrow.call({ x: 1 }); // still logs window/global, not {x:1}

// 8. Quick Mental Model

// call → Call now, with this and args.

// apply → Call now, with this and array args.

// bind → Bind this, return new function to call later.

// ⚡So, in short:

// Use call when you know the arguments.

// Use apply when arguments are in an array.

// Use bind when you want a function to remember a specific this for later.
