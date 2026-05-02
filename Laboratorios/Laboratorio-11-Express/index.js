const express = require('express');
const bodyParser = require('body-parser');

const controlRoutes = require('./routes/control_routes');
const formRoutes = require('./routes/form_routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/paginas', controlRoutes);
app.use('/formulario', formRoutes);

app.get('/', (request, response) => {
    response.send('<h1>Inicio</h1><a href="/formulario/form_method">Ir al formulario</a>');
});

app.use((request, response) => {
    response.status(404).send('<p>404 | Ruta no encontrada</p>');
});

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});