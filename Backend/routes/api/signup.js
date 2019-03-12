const route = require('express').Router()
const { addUser } = require('../../controllers')

route.get('/', (req, res) => [
    res.send({
        signupPage: true
    })
])

route.post('/', async (req, res) => {

    try {
        const user = await addUser(req.body.username,req.body.password)

        if (!user) throw new Error('Error creating User')

        res.redirect('/api/login')
        return user
    } catch (err) {
        res.redirect('./api/signup')
        return err
    }

})

module.exports = route

