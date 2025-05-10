const express = require('express');
const app = express();
const mongoose = require('mongoose'); // Solo una declaración de mongoose
mongoose.set('strictQuery', true); // Suprime la advertencia

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/products', { useNewUrlParser: true, useUnifiedTopology: true });

const ProductSchema = new mongoose.Schema({ name: String, price: Number });
const Product = mongoose.model('Product', ProductSchema);

app.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});