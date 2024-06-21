const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000
const URI = process.env.URI
const Router = require('./Routes/Registration')

const path = require('path')

const app = express()
// app.use(cors)

//connectiog to mongo Cloud

mongoose.connect(URI, { useNewUrlParser: true , useUnifiedTopology: true})
const db = mongoose.connection


db.on('error', (err)=>{ console.log(err)})

db.once('open', ()=>{
    console.log('Connected to Mongo')

})




app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.use("/api", Router)  

app.listen(PORT, ()=>{
    console.log('Sever is running. Port ', PORT)
})