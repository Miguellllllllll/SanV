const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El campo nombre es requerido']
    }
}, { collection: 'nmSanV' });

module.exports = model('Usuario', usuarioSchema);
