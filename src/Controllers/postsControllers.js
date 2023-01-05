// const fs = require('fs');
// const path = require('path');

const consultas = require("../Models/consultas.js");


    consultas.get = async (req, res) => {

        const posts = await showTable();
        res.json(posts);
        
    },

    consultas.post = async (req, res) => {


    }

module.exports = consultas;