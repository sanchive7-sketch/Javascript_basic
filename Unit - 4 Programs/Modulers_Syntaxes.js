// JavaScript Modules

// 1. Named Export
// math.js
export function add(a, b) {
    return a + b;
}

// app.js
import { add } from "./math.js";

console.log(add(10, 20));


// 2. Default Export
// message.js
export default "Welcome to JavaScript";

// app.js
import message from "./message.js";

console.log(message);


// 3. Import Alias
import { add as addition } from "./math.js";

console.log(addition(5, 5));


// 4. Export Alias
export {
    add as sum
};


// 5. Import Everything
import * as math from "./math.js";

console.log(math.add(10, 20));


// 6. Mixed Default + Named Export

export default "Student";

export let name = "Arun";
export let mark = 85;


// Browser Module
// <script type="module" src="app.js"></script>
