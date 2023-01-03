const { Pool} = require('pg')

const pool = new Pool({

    host: 'postgresql-daimerlisescalona.alwaysdata.net',
    user: 'daimerlisescalona',
    password: 'Daimerlis123*',
    database: 'daimerlisescalona_like-me-i',
    port: 5432,
    allowExitOnIdle: true

}) 

module.exports=pool;