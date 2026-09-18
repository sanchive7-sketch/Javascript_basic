function getStudentData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Student data received");
        }, 2000);

    });

}

async function displayStudent() {

    console.log("Loading data...");

    let data = await getStudentData();

    console.log(data);

    console.log("Process completed");

}

displayStudent();
