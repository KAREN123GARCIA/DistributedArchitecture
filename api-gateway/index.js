const express = require('express');
const axios = require('axios');
const app = express();


app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const response = await axios.get('http://user-service:3001/');
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error connecting to the user service');
    }
});

app.get('/products', async (req, res) => {
    try {
        const response = await axios.get('http://product-service:3003/');
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error connecting to product service');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway running on the port ${PORT}`);
});