const Sequelize = require('sequelize')

const db = new Sequelize('twitter', 'twitteruser', 'twitterpass', {
    dialect: 'postgres',
    host: 'localhost',
    pool: {
        max: 5,
        min: 0
    }
})

const User = db.define('users', {
    userid:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    following:{
        type:Sequelize.STRING
    },
}, {
        timestamps: false
    })

    const Tweet=db.define('tweets',{
        usertweet:{
            type:Sequelize.STRING,
            allowNull:false
        }
    },{
        timestamps:false
    })

    User.hasMany(Tweet,{foreignKey:'userid'})
    Tweet.belongsTo(User,{foreignKey:'userid'})

    module.exports={
        db,
        User,
        Tweet
    }