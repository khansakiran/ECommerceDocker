const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const path = require('path')

const { PORT = 4000 } = process.env
app.use(cors())
app.use(express.json())
app.use(express.static('build'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
    })

app.listen(PORT, () => {
    console.log('server listening on port 3000')
})