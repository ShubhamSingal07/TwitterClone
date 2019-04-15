const {
    MongoClient,
    url,
    twitterdbname,
    twitter
} = require('./mongo')

const uuidv4 = require('uuid/v4')

const fetchUsers = async () => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const users = twitterdb.collection(twitter)
        const usersArr = await users.find().toArray()

        const newUsersArr = usersArr.map(({ id, username }) =>
            ({
                id: id,
                username
            }))
        client.close()
        return newUsersArr

    } catch (err) {
        throw err
    }
}

const fetchUser = async (username) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const users = twitterdb.collection(twitter)
        const userArr = await users.findOne({
            username
        })
        if (!userArr) {
            return null
        }

        const userObj = {
            id: userArr.id,
            username: userArr.username,
            password: userArr.password,
        }

        client.close()
        return userObj

    } catch (err) {
        return err
    }
}

const findUser = async (userid) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const users = twitterdb.collection(twitter)

        const userArr = await users.findOne({
            id: userid
        })

        const userObj = {
            id: userArr.id,
            username: userArr.username,
        }

        client.close()
        return userObj

    } catch (err) {
        throw err
    }
}


const addUser = async (username, password) => {
    try {

        const user = await fetchUser(username)
        if (!user) {
            const client = await MongoClient.connect(url)
            const twitterdb = client.db(twitterdbname)
            const users = twitterdb.collection(twitter)
            const id = uuidv4()

            const userArr = (await users.insertOne({
                id,
                username,
                password,
                tweets: [],
                following: [],
            })).ops[0]

            const userObj = {
                username: userArr.username,
                id: userArr.id
            }
            client.close()
            return userObj

        } else {
            throw new Error('Username already exists')
        }
    } catch (err) {
        throw err
    }
}

module.exports = {
    fetchUsers,
    addUser,
    findUser,
    fetchUser
}



