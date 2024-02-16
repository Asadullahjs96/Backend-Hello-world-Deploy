require('dotenv').config()
const express = require('express')


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Login', (req, res)=>{
    res.send('<h3>please login at My App</h3>')
})

app.get('/Register', (req, res)=>{
    res.send('<h3>please register at My App</h3>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})