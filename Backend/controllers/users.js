const { addUser, fetchUser } = require('../db')
const { createJWT } = require('../utils/jwt')

const verifyUser = async (username,password) => {
    try {
        const userObj = await fetchUser(username)
        if (!userObj) {
            throw new Error('User could not be found with given username')
        }
        if (userObj.password !== password) {
            throw new Error('Password Invalid')
        }
        delete userObj.password
        return userObj
    } catch (err) {
        throw new Error('could not connect to database')
    }
}

const createUser = async (username, password) => {
    const user = await addUser(username, password)
    if (!user) throw new Error('Error creating User')
    else {
        const token = createJWT(user)
        user.token = token
        return user
    }
}

module.exports = {
    verifyUser,
    createUser
}
