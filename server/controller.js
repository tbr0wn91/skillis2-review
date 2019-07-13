module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(products => {
            res.status(200).send(products)
        })
    },

    postProduct: (req, res ) => {
        const db = req.app.get('db');
        const { name, price, imageUrl} = req.body

        db.post_product([name, price, imageUrl]).then(products)
    }
}