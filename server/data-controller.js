const knex = require('./db')

exports.getHnum = async (req, res) => {
  knex('data')
    .where('HSHD_NUM', req.body.hnum)
    .orderBy('HSHD_NUM', 'asc')
    .orderBy('BASKET_NUM', 'asc')
    .orderBy('PURCHASE_', 'asc')
    .orderBy('PRODUCT_NUM', 'asc')
    .orderBy('DEPARTMENT', 'asc')
    .orderBy('COMMODITY', 'asc')
    .then((data) => {
      res.json(data)
    })
    .catch(err => {
      res.json({ status: 404, error: err.toString() })
    })
}

exports.getHnum_1 = async (req, res) => {
  knex({ h: 'households', p: 'products', t: 'transactions' })
    .whereRaw('? = ?? AND ?? = ?? AND ?? = ??', [req.body.hnum, 'h.HSHD_NUM', 'h.HSHD_NUM', 't.HSHD_NUM','t.PRODUCT_NUM', 'p.PRODUCT_NUM'])
    .orderBy('h.HSHD_NUM', 'asc')
    .orderBy('t.BASKET_NUM', 'asc')
    .orderBy('t.PURCHASE_', 'asc')
    .orderBy('t.PRODUCT_NUM', 'asc')
    .orderBy('p.DEPARTMENT', 'asc')
    .orderBy('p.COMMODITY', 'asc')
    .then((data) => {
      res.json(data)
    })
    .catch(err => {
      res.json({ status: 404, error: err.toString() })
    })
    
 }