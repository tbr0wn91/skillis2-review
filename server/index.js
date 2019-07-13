const express = require('express');
const massive = require('massive');
require('dotenv').config();
const app = express();
const controller = require('./controller');

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log(`Connected to db`)
})


app.get('/api/inventory', controller.getInventory);


const PORT = 4020;
app.listen(PORT, () => console.log(`kicking back on the coolest port around, ${PORT}`));