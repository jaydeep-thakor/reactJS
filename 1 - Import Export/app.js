// if you want to import or export the variable or code
// use type="module" in script src

// two types of export
// named export 
// default export

// ---------- named export
export let name = "Jaydeep";
let age = 26
let city = "Gandhinagar"

export {age, city}

// ---------- default export
// there can be only ONE export default in a single JavaScript file.

// wrong it can not written in a single line
// default export let designation = "software developer" 

const designation = "software developer"
export default designation;



