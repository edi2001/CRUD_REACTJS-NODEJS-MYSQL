const mysql = require('mysql2')

const conn = mysql.createConnection({
    user: 'root',
    host:'localhost',
    password:'',
    database:'crudmysql',
    port:'4306'
})


conn.connect((err)=>{
    if (err) throw err
    console.log('db connected')
})

module.exports  = conn