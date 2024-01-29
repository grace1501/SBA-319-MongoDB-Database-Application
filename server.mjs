import express from 'express'
import 'dotenv/config'

const PORT = process.env.PORT || 5050
const app = express()

app.use(express.json())

import plants from './routes/plants.mjs';
app.use('/plants', plants)

import users from './routes/users.mjs';
app.use('/users', users)

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`)
})