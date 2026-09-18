function login() {

    return new Promise((resolve, reject) => {

        let validUser = false;

        if (validUser) {
            resolve("Login successful");
        } else {
            reject("Invalid username or password");
        }

    });

}

async function checkLogin() {

    try {

        let result = await login();

        console.log(result);

    } catch (error) {

        console.log("Error:", error);

    }

}

checkLogin();
