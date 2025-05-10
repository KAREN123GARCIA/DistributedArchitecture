const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true); // Suprime la advertencia

app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://mongo:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Esquema y modelo de usuario
const UserSchema = new mongoose.Schema({ name: String, email: String });
const User = mongoose.model('User', UserSchema);

// Rutas
app.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post('/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

// Iniciar el servidor
app.listen(3001, () => console.log('User Service running on port 3001'));