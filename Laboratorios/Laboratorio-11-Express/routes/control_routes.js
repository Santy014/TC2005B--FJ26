const express = require('express');
const router = express.Router();

router.get('/Descripcion', (req, res) => {
    res.send(`<h1> Descripcion Package.json</h1> 
        <p>   Package.json es un archivo generado automaticamente al crear un nuevo proyecto, este archivo gestiona las configuraciones
        dependencias y scripts que maneja el proyecto, </p>
        `);
});

router.get('/Fill1', (req, res) => {
    res.send('<h1>Fill1</h1>  <p> HOLAAAAAAAAA (segundo) </p>');
});

router.get('/Fill2', (req, res) => {
    res.send('<h1>Productos</h1> <p> HOLAAAAAAAAA (tercero) </p>');
});

module.exports = router;