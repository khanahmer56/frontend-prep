// Alright Ahmer, let’s go step by step into Event Bubbling & Capturing in JavaScript with depth 🔎

// 1. What happens when an event is triggered?

// When you click on an element, say a button inside a div, the event doesn’t just stay at that button.

// The browser dispatches the event in three phases:

// Capturing phase (trickle down)
// Event travels from the root (window → document → html → body → parent → child).

// Target phase
// Event reaches the actual element (the target).

// Bubbling phase (bubble up)
// Event travels back up (child → parent → body → html → document → window).

// 2. Event Capturing

// Also called trickling phase.

// The event is first captured from the outermost element down to the target element.

// In JS, you can listen in capturing phase by passing { capture: true } (or true in older syntax).

// 👉 Example:

// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

// document.getElementById("parent")
//   .addEventListener("click", () => console.log("Parent capture"), true);

// document.getElementById("child")
//   .addEventListener("click", () => console.log("Child capture"), true);

// document.getElementById("child")
//   .addEventListener("click", () => console.log("Child bubbling"));

// document.getElementById("parent")
//   .addEventListener("click", () => console.log("Parent bubbling"));

// 👉 Clicking the button prints:

// Parent capture
// Child capture
// Child bubbling
// Parent bubbling

// 3. Event Bubbling

// Default behavior in JS.

// The event bubbles up from target element to ancestors.

// Useful for event delegation (attaching one listener to a parent instead of multiple children).

// 👉 Example: Event Delegation

// document.getElementById("parent").addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     console.log("Button clicked:", e.target.id);
//   }
// });

// Instead of attaching listeners to 100 buttons, just attach one to the parent.

// More efficient and works even for dynamically added buttons.

// 4. Stopping Propagation

// Sometimes you don’t want an event to continue bubbling or capturing.

// event.stopPropagation() → stops event from going further (up or down).

// event.stopImmediatePropagation() → also prevents other listeners on the same element from running.

// event.preventDefault() → stops default browser behavior (e.g., prevent form submit), but event still propagates.

// 👉 Example:

// child.addEventListener("click", (e) => {
//   console.log("Child clicked");
//   e.stopPropagation();
// });

// parent.addEventListener("click", () => console.log("Parent clicked"));

// Clicking child logs "Child clicked", but not "Parent clicked".

// 5. Real-World Uses

// ✅ Event Delegation → handle many elements with one listener (menu items, lists).
// ✅ Custom Control → choose whether to listen during capture or bubble phase.
// ✅ Prevent Conflicts → stop propagation when an inner handler shouldn’t trigger parent’s handler.

// 6. Visual Summary
// CAPTURING: window → document → html → body → parent → child
// TARGET:   child (event occurs here)
// BUBBLING: child → parent → body → html → document → window

// 7. Default Phase

// By default, JS event listeners use bubbling phase unless you pass true (or { capture: true }).

// Most devs stick to bubbling because of event delegation.

// Capturing is used rarely, usually when you need very early interception.

// ✅ Quick takeaway:

// Capturing = goes top → down.

// Bubbling = goes bottom → up (default).

// Use stopPropagation() to stop it.

// Use event delegation with bubbling for efficient handling.
