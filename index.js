const express = require('express')
require('dotenv').config()


const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/twitter',(req,res)=>{
    res.send("deepakdas")
})

app.get('/login',(req,res)=>{
    res.send('<h1>hii this a first website</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})