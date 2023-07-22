const {createPool} = require('mysql')


const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Rick@123",
    connectionLimit: 10
})

pool.query(`select * from user_data.user_data`, (err, res)=>{
    console.log(err)
    return console.log(res)
})