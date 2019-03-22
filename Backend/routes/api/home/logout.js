const route = requrie('express').Router()

route.get('/', (req, res) => {
    req.logout();
    res.send({
        success: true,
        message: 'Successfully logged out'
    })
})

module.exports=route