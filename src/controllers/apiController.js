const { faker } = require("@faker-js/faker");

const requestSucessfull = (req, res) => {
    res.status(200).send();
};

const requestError = (req, res) => {
    res.status(400).json({ error: err.message });
};

const productsTest = (req, res) => {
    const products = generateRandomProducts();
    res.json(products);
};

const generateRandomProducts = (qty = 5) => {
    const productsList = [];

    for (let i = 0; i < qty; i++) {
        const product = {
            id: i + 1,
            title: faker.commerce.product(),
            price: faker.commerce.price(1, 80000, 2),
            thumbnail: faker.image.fashion(500, 500, true),
        };
        productsList.push(product);
    }
    return productsList;
};

module.exports = { productsTest, requestSucessfull, requestError };
