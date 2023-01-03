const express = require("express");
const cors = require('cors');
const app = express();

const indexRoutes = require('./Routes/indexRoutes.js');

app.listen(3000, console.log("¡Servidor encendido de manera exitosa!"));

app.use(express.json())
app.use(cors());


app.use('/', indexRoutes);
// app.use('*', function (req, res) {

//     res.send("Error. Intente nuevamente con una ruta correcta.");

// });
