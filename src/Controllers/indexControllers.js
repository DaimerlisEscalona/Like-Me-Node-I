const path = require('path');
//const express = require('express');
//const app = require('../Routes/indexRoutes');
//const router = express.Router();
//const app = express();

const controller = {
    
    load: (req, res) => {

        const route = path.resolve(__dirname, '../Views/index.html');
        res.sendFile(route);
        //res.sendFile(__dirname,"index.html")
    },
    
}

module.exports = controller;
