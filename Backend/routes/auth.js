const { verifyJWT } = require('../utils/jwt')

const userAuthViaToken = async (req, res, next) => {
    const auth = req.header('Authorization')
    if (!auth) {
        res.status(403).send({
            error: 'Only for logged in Users'
        })
    }
    const token = auth.split(' ')[1]
    const decodedUser = verifyJWT(token)
    if (!decodedUser) {
        return res.status(403).send({
            userNotPresent: true,
            error: ''
        })
    }
    req.user = decodedUser
    return next()
}

module.exports = {
    userAuthViaToken
}