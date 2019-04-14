const route = require('express').Router()

const { verifyUser } = require('../../controllers/users')
const { createJWT } = require('../../utils/jwt')

route.get('/', (req, res) => {
    res.send({
        loginPage: true
    })
})

route.post('/', async (req, res) => {
    try {
        const verifiedUser = await verifyUser(req.body.username, req.body.password)
        const token = createJWT(verifiedUser)
        verifiedUser.token = token
        res.send({
            success:true,
            user: verifiedUser
        })
    } catch (err) {
        res.send({
            error: 'Invalid username or password'
        })
    }
})

module.exports = route