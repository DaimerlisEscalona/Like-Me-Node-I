const express = require('express');
const app = express();

const indexControllers = require('../Controllers/indexControllers.js')
const postsRoutes = require('./postsRoutes.js')

app.get("/", indexControllers.load);
app.use("/posts", postsRoutes);


module.exports = app;
