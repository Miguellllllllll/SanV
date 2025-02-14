const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Importar cors
const usuarioRouter = require('./routers/usuario');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configurar middleware
app.use(cors()); // Usar cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Asegurarse de que el middleware esté configurado correctamente

// Conectar a MongoDB Atlas
const uri = process.env.MONGODB_URI || 'mongodb+srv://miguelnontol99:zGeEJwEA7ZOx2Rev@clustera.elib0.mongodb.net/?retryWrites=true&w=majority&appName=ClusterA';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a MongoDB Atlas');
        console.log(`Base de datos: ${mongoose.connection.name}`);
        console.log(`Colección: nmSanV`);
    })
    .catch(err => {
        console.error('Error conectando a MongoDB Atlas', err);
        process.exit(1);
    });

// Usar el router de usuario
app.use('/usuario', usuarioRouter);

app.get('/mensaje', (req, res) => {
    const persona = req.query.persona;
    res.sendFile(path.join(__dirname, 'public', 'mensaje.html')); // Asegúrate de tener un archivo mensaje.html en la carpeta public
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
