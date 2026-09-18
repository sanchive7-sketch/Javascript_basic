// Promise creation
let studentData = new Promise((resolve, reject) => {

    let studentFound = true;

    if (studentFound) {
        resolve("Student data found");
    } else {
        reject("Student data not found");
    }

});

console.log("Promise started");

studentData
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Process completed");
    });
