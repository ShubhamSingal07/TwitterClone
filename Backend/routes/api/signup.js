const route = require('express').Router()
const { createUser } = require('../../controllers/users')

route.get('/', (req, res) => {
    res.send({
        signupPage: true
    })
})

route.post('/', async (req, res) => {
    const user=await createUser(req.body.username,req.body.password)
    res.send({
        success:true,
        user
    })
})

module.exports = route

