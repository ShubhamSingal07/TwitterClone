const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const twitterdbname = 'twitterdb'
const twitter = 'twitter'
let userid = 0

const fetchUsers = async () => {
    try {
        const client = MongoClient.connect(url)
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
    addUser
}



