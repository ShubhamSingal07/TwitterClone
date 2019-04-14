const jwt=require('jsonwebtoken')

const JWT_SECRET='fnjlbbdvs6sd41sanbsfsc+2a2s+2cf4sdg5s+f+as'

function createJWT(user){
    const token=jwt.sign(user,JWT_SECRET)
    return token
}

function verifyJWT(token){
    const user=jwt.decode(token,JWT_SECRET)
    return user
}

module.exports={
    createJWT,
    verifyJWT
}