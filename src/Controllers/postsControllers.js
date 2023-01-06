const consultas = {}
const { showTable, saveLog } = require("../Models/consultas.js");

consultas.get = async (req, res) => {

    const posts = await showTable();
    res.json(posts);

}

consultas.post = async (req, res) => {

    const { titulo, url, descripcion } = req.body;
    await saveLog(titulo, url, descripcion);
    res.send("El posts se agregó de manera exitosa");

}

module.exports = consultas;