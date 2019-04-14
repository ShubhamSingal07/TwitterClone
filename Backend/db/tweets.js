const uuidv4 = require('uuid/v4')

const {
    MongoClient,
    url,
    twitterdbname,
    twitter
} = require('./mongo')

const fetchTweets = async (userid) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const tweets = twitterdb.collection(twitter)

        const tweetsArr = await tweets.findOne(
            { id: userid }
        )
        client.close()
        return tweetsArr.tweets
    }
    catch (err) {
        throw err
    }
}

const fetchFollowingTweets = async (userid, followingArr) => {

    const tweets = await fetchTweets(userid)

    let tweetsArr = []
    for (i = 0; i < followingArr.length; i++) {
        const tweet = await fetchTweets(followingArr[i])
        tweetsArr = [...tweet, ...tweetsArr]
    }

    return [...tweets, ...tweetsArr]
}

const addTweet = async (userid, tweet,username) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const tweets = twitterdb.collection(twitter)

        const tweetid = uuidv4()
        let value={
            tweetid,
            tweetByUserId: userid,
            tweetByUserName: username,
            tweet,
            likes: 0,
            likedby: []
        }
        await tweets.updateOne(
            { id: userid },
            {
                $push: {
                    tweets: {
                        $each: [value],
                        $position:0
                    }
                }
            }
        )
        
        client.close()
        return value
    } catch (err) {
        throw err
    }
}

module.exports = {
    fetchTweets,
    addTweet,
    fetchFollowingTweets,
}