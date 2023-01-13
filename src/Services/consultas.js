const pool = require('../DataBase/db')

const showTable = async () => {

   const { rows } = await pool.query("SELECT * FROM posts ORDER BY id ASC")
   return rows

};

const saveLog = async (titulo, img, descripcion) => {

   const consultas = "INSERT INTO posts (titulo, img, descripcion) values ($1, $2, $3)";
   const values = [titulo, img, descripcion];
   const result = await pool.query(consultas, values);
   return (result);

}

const modifyLog = async (id) => {

   const modifyQuery = 'UPDATE posts SET likes=likes+1 WHERE id=$1';
   const values = [id]
   const resultQuery = await pool.query(modifyQuery, values);
   return resultQuery;


}

const deleteLog = async (id) => {

   const consulta = `DELETE FROM posts WHERE id=$1`;
   const result = await pool.query(consulta, [id])
   return (result);

}

module.exports = { showTable, saveLog, modifyLog, deleteLog }