const pool = require('../DataBase/db')

const showTable = async () => {
    
   const { rows } = await pool.query("SELECT * FROM posts")
   console.log("hola");
    return rows
    
};

const saveLog = async () => {

   }

   const updatePost = async (id,like) =>{
      const consulta = `UPDATE posts SET like=$2 where id=$1`;
      const valores = [id,like];
      const resultado =await pool.query(consulta,valores)
      return(resultado);
      
   }
  

module.exports = { showTable, saveLog}