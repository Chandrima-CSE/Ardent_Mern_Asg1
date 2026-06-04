// 1. Create a product card mapping system using ES6 map() method.

function productCards() {
    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mobile" },
        { id: 3, name: "Headphones"},
        { id: 4, name: "Smartwatch"},
        { id: 5, name: "Computer"}
    ];

    return products.map(product => product.name);
}

module.exports = productCards;