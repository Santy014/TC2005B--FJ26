const express = require('express');
const router = express.Router();

const mensajes = [];

router.get('/form', (req, res) => {
    res.render('form');
});

router.post('/form', (req, res) => {
    const nombre = req.body.nombre;
    const mensaje = req.body.mensaje;

    mensajes.push({
        nombre: nombre,
        mensaje: mensaje
    });

    res.redirect('/formulario/datos');
});

router.get('/datos', (req, res) => {
    res.render('datos', {
        mensajes: mensajes
    });
});

module.exports = router;