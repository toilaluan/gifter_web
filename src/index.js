const express = require('express')
const morgan = require('morgan')
const app = express()
const {engine} = require('express-handlebars')
const sass = require('sass')
const path = require('path')
const mysql = require('mysql')
const route = require('./routes')
const port = 3000
const fs = require('fs')
const newsController = require('./app/controllers/NewsController')


// import * as config from "config.js"
console.log(__dirname)
let rawdata = fs.readFileSync(path.join(__dirname,'config.json'))
let config = JSON.parse(rawdata)
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan('combined'))


const result = sass.compile(path.join(__dirname, "resources/scss/app.scss"))
console.log(result.css)
app.engine('hbs', engine({
    extname: '.hbs'
}))


app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "resources/views"))

route(app)

app.listen(port, () => {
    console.log(`Example app is listening at http://localhost:${port}`)
})