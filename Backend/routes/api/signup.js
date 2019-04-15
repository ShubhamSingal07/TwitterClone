const route = require('express').Router()
const { createUser } = require('../../controllers/users')

route.get('/', (req, res) => {
    res.send({
        signupPage: true
    })
})

route.post('/', async (req, res) => {
    try {
        const user = await createUser(req.body.username, req.body.password)
        res.send({
            success: true,
            user
        })
    }
    catch (err) {
        res.send({
            exist:true,
            errors: 'Username already exists'
        })
    }
})

module.exports = route

