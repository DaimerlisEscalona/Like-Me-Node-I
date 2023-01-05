const pool = require('../DataBase/db')

const showTable = async () => {
    
   const { rows } = await pool.query("SELECT * FROM posts")
   console.log("hola");
    return rows
    
};

const saveLog = async () => {

      
   }
  

module.exports = { showTable, saveLog}