// ----------Real DOM
// The Real DOM is the actual webpage structure created by the browser.
// Whenever any change happens (like changing text, color, or adding an element), the browser directly updates the webpage.
// If many changes happen again and again, these direct updates can make the page slower.

// ----------Virtual DOM
// The Virtual DOM is a lightweight copy of the Real DOM stored in memory.
// When something changes, the update is first made to this copy, not to the real webpage.
// Then it compares the updated copy with the Real DOM, finds only what has changed, and updates only those specific parts in the Real DOM.
// Because of this comparison, the webpage updates are faster and more efficient.