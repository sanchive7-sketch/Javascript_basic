let text = "JavaScript is easy. JavaScript is powerful.";

// match()
console.log("match():", text.match(/JavaScript/g));

// matchAll()
let matches = text.matchAll(/JavaScript/g);
console.log("matchAll():", [...matches]);

// search()
console.log("search():", text.search(/powerful/));

// replace()
console.log(
    "replace():",
    text.replace("JavaScript", "JS")
);

// replaceAll()
console.log(
    "replaceAll():",
    text.replaceAll("JavaScript", "JS")
);

// split()
let languages = "Java,Python,JavaScript";

console.log(
    "split():",
    languages.split(",")
);
