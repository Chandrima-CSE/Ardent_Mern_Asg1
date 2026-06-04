// 5. Create a single product details feature using find() method

function findProduct() {
    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "TV" }
    ];

    return products.find(product => product.id === 2);
}

module.exports = findProduct;