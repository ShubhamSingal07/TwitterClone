const express = require('express')
const app = express()

app.use('/api', require('./routes/api'))

app.listen(5000, () => {
    console.log('server started at http://localhost:5000')
})