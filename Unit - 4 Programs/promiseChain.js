function getStudent() {

    return Promise.resolve({
        name: "Arun",
        mark: 85
    });

}

getStudent()

    .then((student) => {
        console.log("Name:", student.name);
        return student.mark;
    })

    .then((mark) => {
        console.log("Mark:", mark);

        if (mark >= 50) {
            return "PASS";
        } else {
            return "FAIL";
        }
    })

    .then((result) => {
        console.log("Result:", result);
    })

    .catch((error) => {
        console.log("Error:", error);
    });
