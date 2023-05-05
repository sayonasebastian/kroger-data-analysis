
const path = require('path')

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'kroger-server.mysql.database.azure.com',
    port : 3306,
    user : 'krogeradmin',
    password : 'helloGroup44@',
    database : 'kroger-db',
    ssl: true
  }
})

knex.schema
  .hasTable('users')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('users', (dt) => {
        dt.increments('id').primary()
        dt.string('username')
        dt.string('password')
        dt.string('email')
      })
        .then(() => {
          console.log("200");
         res.json({ status: 200 })
        })
        .catch((error) => {
          console.log("404");
          res.json({ status: 404, error: error.toString() })
        })
    }
  })
  .then(() => {
    console.log('done')
  })
  .catch((error) => {
    console.log("404");
   res.json({ status: 404, error: error.toString() })
  })

knex.select('*').from('users')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

module.exports = knex