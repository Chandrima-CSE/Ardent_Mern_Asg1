// 10. Develop an API login error handling system using try-catch with async/await

const login = async () => {
    try {
        const response = await Promise.resolve("Login Successful");

        console.log(response);
    } catch (error) {
        console.log("Login Failed");
    }
};

module.exports = login;