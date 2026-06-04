// 7. Create a user registration module using objects and functions

function registerUser(name, email, age) {
    const user = {
        name: name,
        email: email,
        age: age
    };

    return user;
}

module.exports = registerUser;