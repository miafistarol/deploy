import express, { request } from "express"
import { Pool } from "pg"



const PUERTO = process.env.PORT || 3000
const app = express()
app.get('/test' , (req, res)=> {
    res.send('Test okey')
})

app.listen()