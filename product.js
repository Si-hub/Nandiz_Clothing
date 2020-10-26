module.export = function clothingLabel() {

    async function insertItems(product) {
        const insert = await pool.query(' INSERT INTO products(product_name, size, quantity, price) VALUES($1,$2,$3,$4)', [product])
        return insert.rows;
    }

    async function insertName(name) {
        const insert = await pool.query(' INSERT INTO customer(customer_name) VALUES($1)', [name])
        return insert.rows;
    }

    async function getProductDetail() {

    }

    async function getAllProducts() {

    }
    return {
        insertItems,
        insertName,
        getProductDetail,
        getAllProducts

    }
}