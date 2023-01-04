const express = require("express");
const cors = require('cors');
const indexRoutes = require('./Routes/indexRoutes.js');

const app = express();

app.use(express.static('src/Views'));
app.use(express.json())
app.use(cors());

app.listen(3000, console.log("¡Servidor encendido de manera exitosa!"));

app.use('/', indexRoutes);
app.use('*', function (req, res) {

    res.send("Error. Intente nuevamente con una ruta correcta.");

});
