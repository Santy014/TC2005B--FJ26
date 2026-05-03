const express = require('express');
const router = express.Router();

router.get('/descripcion', (req, res) => {
    res.render(`descripcion`);
});

router.get('/fill1', (req, res) => {
    res.render('fill1');
});

router.get('/fill2', (req, res) => {
    res.render('fill2');
});

module.exports = router;