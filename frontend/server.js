import express from 'express'
import join from "path"
const app = express()

app.get('/', (req, res) =>{
  res.sendFile(join(process.cwd(), "index.html"))
})

app.listen(9090, ()=> console.log('front server is running'))