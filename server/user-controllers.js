const knex = require('./db')

exports.usersCreate = async (req, res) => {
  knex('users')
    .insert({
      'username': req.body.username,
      'password': req.body.password,
      'email': req.body.email,
      'id': req.body.id,
    })
    .then((data) => {
      res.json({ status: 200, data: data })
    })
    .catch(err => {
      console.log("404");
     res.json({ status: 404, error: err.toString() })
    })
}


exports.usersCheck = async (req, res) => {
  console.log("checking ");
  knex('users')
    .where('username', req.body.username)
    .then((user) => {
      res.json(user)
    })
    .catch(err => {
      res.json({ status: 404, error: err.toString() })
    })
}