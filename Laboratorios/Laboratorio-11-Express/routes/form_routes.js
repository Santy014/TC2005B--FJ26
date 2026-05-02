const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/form_method', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views/form.html'));
});

router.post('/form_method', (request, response) => {
    const nombre = request.body.nombre;
    const mensaje = request.body.mensaje;

    fs.appendFileSync('datos.txt', `Nombre: ${nombre} | Mensaje: ${mensaje}\n`);

    response.send('<h1>Datos guardados</h1><a href="/">Volver</a>');
});

module.exports = router;