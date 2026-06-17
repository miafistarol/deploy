import 'dotenv/config'
import express, { request } from "express"
import { Pool } from "pg"

const pool =({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    database: process.env.BD_NAME,
    port: process.env.BD_PORT,
    pass: process.env.BD_PASS

})

const PUERTO = process.env.PORT || 3000
const app = express()
app.get('/test' , async (req, res)=> {
    await pool.query('SELECT * from mensajes')
    res.send('Test okey')
})

app.listen()