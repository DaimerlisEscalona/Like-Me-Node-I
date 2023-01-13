const { showTable, saveLog, modifyLog, deleteLog } = require("../Services/consultas");

const consultas = {

    get: async (req, res) => {

        const posts = await showTable();
        res.json(posts);

    },

    post: async (req, res) => {

        try {
            const { titulo, url, descripcion } = req.body;
            await saveLog(titulo, url, descripcion);
            res.send("Posts agregado con éxito ");
        } catch (error) {
            res.status(500).send("No fué posible agregar el nuevo Posts")
        }

    },

    put: async (req, res) => {

        try {
            const { id } = req.params;
            await modifyLog(id);
            res.send("Post actualizado con éxito");
        } catch (error) {
            res.status(500).send(`Falló la actualización del Posts con el ID:${req.params.id}`)
        }

    },

    delete: async (req, res) => {

        try {
            const { id } = req.params;
            await deleteLog(id);
            res.send("Posts eliminado con éxito")

        } catch (error) {
            res.status(500).send(`No se logró eliminar el Posts con el ID:${req.params.id}`)
        }
    }

}

module.exports = consultas;