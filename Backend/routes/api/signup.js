const route = require('express').Router()
const { User } = require('../../db/models')

route.get('/', (req, res) => [
    res.send({
        signupPage: true
    })
])

route.post('/', async (req, res) => {

    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password
        })

        if (!user) throw new Error('Error creating User')

        return res.redirect('/api/login')
    } catch (err) {
        res.redirect('/api/signup')
    }

})

module.exports = route

