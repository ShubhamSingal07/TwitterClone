const route = require('express').Router()
const { addUser } = require('../../controllers')

route.get('/', (req, res) => [
    res.send({
        signupPage: true
    })
])

route.post('/', async (req, res) => {

    try {
        const user = await addUser(req.body.username,req.body.password)[0]

        if (!user) throw new Error('Error creating User')

        return res.redirect('/api/login')
    } catch (err) {
        res.redirect('/api/signup')
    }

})

module.exports = route

