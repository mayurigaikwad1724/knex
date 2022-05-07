
// // ***********CREATE TABLE********
// const options={
//     client: 'mysql2',
//     connection:{
//         host: "localhost",
//         user: "root",
//         password: "Mayuri@123",
//         database: "mydb"
//     }
// }
// const knex = require('knex')(options);
// knex.schema.createTable('cars',(table)=>{
//     table.increments('id')
//     table.string('name')
//     table.integer('price')
// }).then(()=>console.log("table created"))
//     .catch((err)=>{console.log(err);throw err})
//     .finally(()=>{
//         knex.destroy;
//     });