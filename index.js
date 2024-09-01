const express = require('express')
const app = express()



app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get ('/form/', (req,res)=>{
    const {name} = req.query;
    res.send(`Hello ${name}`)
})

app.listen(8000)