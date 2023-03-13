const express=require('express')
require('dotenv').config()

const app=express()

require('./config/db')

const PORT = 2300 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server Started on ${PORT}`)
})