// // ******SELECT_CARS******
// const options = {
//     client: 'mysql2',
//     connection: {
//         host: "localhost",
//         user: "root",
//         password: "Mayuri@123",
//         database: "mydb"

//     }
// }
// const knex = require('knex')(options);
// knex.from('cars').select("*")
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['id']} ${row['name']} ${row['price']}`);
//         }
//     }).catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });