// 2. Develop a user profile dashboard using object destructuring.

function profile() {
    const user = {
        name: "Riya",
        email: "riya@gmail.com",
        bio: "Software Developer with a passion for coding and problem-solving"
    };

    const { name, email,bio } = user;

    return name + " email: " + email + " bio: " + bio;
}

module.exports = profile;