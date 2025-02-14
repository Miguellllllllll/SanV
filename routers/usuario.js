const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Ruta para guardar el nombre en la base de datos
router.post('/save', async (req, res) => {
    const { personaEspecial } = req.body;
    console.log('Datos recibidos:', req.body); // Mensaje de depuración
    console.log('Valor de personaEspecial:', personaEspecial); // Mensaje de depuración
    try {
        if (!personaEspecial) {
            return res.status(400).send('El campo personaEspecial es requerido');
        }
        const nuevoUsuario = new Usuario({ nombre: personaEspecial });
        await nuevoUsuario.save();
        console.log('Nombre guardado exitosamente'); // Mensaje de depuración
        res.status(200).send(`Nombre guardado exitosamente: ${personaEspecial}`);
    } catch (error) {
        console.error('Error guardando el nombre en la base de datos', error);
        res.status(500).send('Error guardando el nombre');
    }
});

module.exports = router;
