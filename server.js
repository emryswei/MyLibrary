// 用來確認開發環境
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

// setup view engine. view engine屬於Expresss.js。用來render web pages
// pp.set('views', __dirname + '/views')設定views的目錄，
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)     // app.use([path], callback)用來mount middlewave function或指定路徑下的function
app.use(express.static('./public'))
app.use('/', indexRouter)

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: "true" })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongodb'))


app.listen(process.env.PORT || 3000)