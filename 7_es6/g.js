// 7. Create an async user data fetching system using async/await.

const getUser = async () => {
    const user = await Promise.resolve({
        name: "Mimi"
    });

    console.log(user);
};

module.exports = getUser;