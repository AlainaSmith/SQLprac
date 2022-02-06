require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const controller = require('./controller')

app.use(express.json())
app.use(cors())

const SERVER_PORT = process.env.SERVER_PORT

app.get('/api/concerts', controller.getConcerts)

app.post('/api/search', controller.searchConcerts)

app.post('/api/add', controller.addConcerts)

app.get('/api/added', controller.getAddedConcerts)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))