// 🔹 What is Throttling?

// Throttling ensures that a function is called at most once in a given period, no matter how many times the event is triggered.

// 👉 Unlike debounce (waits for silence), throttle (fires regularly while events keep happening).

// Example: Throttle Function
// function throttle(fn, delay) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = Date.now();

//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fn.apply(this, args);
//     }
//   };
// }

// Example Usage (Vanilla JS)
// function onScroll() {
//   console.log("Scroll event fired:", Date.now());
// }

// window.addEventListener("scroll", throttle(onScroll, 1000));

// 📌 Even if you scroll like crazy, onScroll runs once every 1 second, not on every pixel move.

// 🔹 Throttling vs Debouncing (Key Difference)
// Feature	Debounce	Throttle
// When executed	After a pause (waits until user stops)	At fixed intervals (executes regularly)
// Use cases	Search input, auto-save, resize events	Scroll, drag, window resize, button spam
// Behavior	Only the last call matters	Ensures consistent execution rate
// 🔹 React Example (Throttle in Input)
// import React, { useState, useCallback } from "react";

// function throttle(fn, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fn.apply(this, args);
//     }
//   };
// }

// function fetchResults(query) {
//   console.log("Fetching results for:", query);
// }

// export default function SearchBar() {
//   const [query, setQuery] = useState("");

//   const throttledSearch = useCallback(
//     throttle((value) => {
//       fetchResults(value);
//     }, 1000), // fire once every 1s
//     []
//   );

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//     throttledSearch(e.target.value);
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Search with throttle..."
//         className="border p-2 rounded w-full"
//       />
//     </div>
//   );
// }

// ✅ If the user types super fast:

// Debounce → waits until they stop typing.

// Throttle → fetches results every X ms while typing.
