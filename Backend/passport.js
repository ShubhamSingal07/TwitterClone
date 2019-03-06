const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const { User } = require('./db/models')

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({
                where: {
                    username
                }
            })

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
        User.findOne({
            where: {
                id: UserID
            }
        })
            .then((user) => done(null, user))
            .catch(done)
    }
)

module.exports = passport