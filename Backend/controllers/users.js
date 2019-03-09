const {
    MongoClient,
    url,
    twitterdbname,
    twitter
} = require('./mongo')
let userid = 0

const fetchUsers = async () => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const users = twitterdb.collection(twitter)
        const usersArr = await users.find({},
            {
                username: 1
            }
        ).toArray()

        return usersArr

    } catch (err) {
        throw err
    }
}

const fetchUser = async (username) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const users = twitterdb.collection(twitter)
        const usersArr = await users.findOne({
            username
        },
            {
                username: 1,
                password: 1
            }
        ).toArray()

        return usersArr

    } catch (err) {
        throw err
    }
}

const findUser = async (id) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const users = twitterdb.collection(twitter)
        const usersArr = await users.findOne({
            userid:id
        },
            {
                username: 1,
                password: 1
            }
        ).toArray()

        return usersArr

    } catch (err) {
        throw err
    }
}


const addUser = async (username, password) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const users = twitterdb.collection(twitter)
        userid++;

        const usersArr = await users.insertOne({
            userid,
            username,
            password,
            tweets: [],
            following: [],
        }).toArray()

        return usersArr

    } catch (err) {
        throw err
    }
}

module.exports = {
    fetchUsers,
    addUser,
    fetchUser,
    findUser
}



