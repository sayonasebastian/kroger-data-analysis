const express = require('express')

const router = express.Router()

const data = require('./data-controller.js')

router.put('/getHNum', data.getHnum)

router.put('/getHNum_1', data.getHnum)

module.exports = router