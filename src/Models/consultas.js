const pool = require('../DataBase/db')

const showTable = async () => {

   const { rows } = await pool.query("SELECT * FROM posts")
   return rows

};

const saveLog = async (titulo, img, descripcion) => {

   const consultas = "INSERT INTO posts (titulo, img, descripcion) values ($1, $2, $3)";
   const values = [titulo, img, descripcion];
   const result = await pool.query(consultas, values);
   return (result);

}

module.exports = { showTable, saveLog }