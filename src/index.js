const express = require("express");
const cors = require('cors');
const postsRoutes = require('./Routes/postsRoutes');

const app = express();

app.use(express.static('src/Views'));
app.use(express.json());
app.use(cors());

app.use('/', postsRoutes);

app.listen(3000, console.log("¡Servidor encendido de manera exitosa!"));