const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { fetchUser, findUser } = require('./controllers')

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await fetchUser(username)[0]

            if (!user) {
                return done(null, false, { message: 'Username Invalid' })
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Password Invalid' })
            }
            done(null, user)

        } catch (err) {
            done(err)
        }
    }
))

passport.serializeUser(
    (user, done) => {
        done(null, user.id)
    }
)

passport.deserializeUser(
    (UserID, done) => {
        findUser(UserID)
            .then((user) => done(null, user))
            .catch(done)
    }
)

module.exports = passport