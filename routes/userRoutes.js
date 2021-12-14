const router = require('express').Router()
const db = require('../db')

router.get('/to_do_list', (req, res) => {
  db.query('SELECT * FROM to_do_list', (err, to_do_list) => {
    if (err) { console.log(to_do_list) }
    res.json(to_do_list)
  })
})

router.post('/to_do_list', (req, res) => {
  db.query('INSERT INTO to_do_list SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
