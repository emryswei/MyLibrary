const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index') // render的是index.ejs 
})

module.exports = router