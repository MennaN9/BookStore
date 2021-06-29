const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('../db/db')
require('dotenv/config')
const userRoutes = require('../routes/user.router')
const categoryRoutes = require('../routes/category.router')
const booksRoutes = require('../routes/books.router')
const ordersRoutes = require('../routes/orders.router')

const api = process.env.PrefixUrl


app.use(cors())
app.options('*',cors)
app.use(express.json())
app.use(morgan('tiny')) // for display block request in specific format , logger middleware function


// app.get(api+'/',(req,res)=>{
//     res.send('hello')
//     console.log(api)
// })

 app.use(`${api}/users`,userRoutes)
 app.use(`${api}/category`,categoryRoutes)
 app.use(`${api}/books`,booksRoutes)
 app.use(`${api}/orders`,ordersRoutes)
module.exports=app