const express = require('express');
const path = require('path');
const controlRoutes = require('./routes/control_routes');
const formRoutes = require('./routes/form_routes');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/paginas', controlRoutes);
app.use('/formulario', formRoutes);
 
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('inicio');
});


app.use((req, res) => {
    res.status(404).render('partials/404');
});

app.listen(3001);