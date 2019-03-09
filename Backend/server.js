const express = require('express')
const app = express()
const session = require('express-session')
const passport=require('./passport')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret:'48d46fdtfj4gsrtyk4uy46m',
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api', require('./routes/api'))

app.listen(5000, () => {
    console.log('server started at http://localhost:5000')
})