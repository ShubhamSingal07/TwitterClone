const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders:'Content-Type,Authorization'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./routes/api'))

app.listen(5000, () => {
    console.log('server started at http://localhost:5000')
})