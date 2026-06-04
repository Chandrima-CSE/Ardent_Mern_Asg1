// 8. Build a merge user profile feature using spread operator.

function mergeProfile() {
    const user = { name: "Kiki" };
    const details = { age: 20 };

    return { ...user, ...details };
}

module.exports = mergeProfile;