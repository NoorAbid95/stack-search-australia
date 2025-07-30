import express from 'express'
import dotenv from 'dotenv'
import { jobSearch } from './controllers/jobSearch.controller.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use("/api/jobs", jobSearch)

app.listen(PORT, () =>{
    console.log("App running on localhost:", PORT);
})