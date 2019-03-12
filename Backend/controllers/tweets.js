const uuidv4 = require('uuid/v4')

const {
    MongoClient,
    url,
    twitterdbname,
    twitter
} = require('./mongo')
const { findFollowing } = require('./following')
const { findUser } = require('./users')

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

const fetchFollowingTweets = async (userid) => {
   
    const tweets = await fetchTweets(userid)
    const followingArr = await findFollowing(userid)
    
    let tweetsArr = []
    for (i = 0; i < followingArr.length; i++) {
        const tweet=await fetchTweets(followingArr[i])
        tweetsArr = [...tweet, ...tweetsArr]
    }
   
    return [...tweets, ...tweetsArr]
}

const addTweet = async (userid, tweet) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const tweets = twitterdb.collection(twitter)

        const tweetid = uuidv4()
        const userObj = await findUser(userid)
        const tweetsArr = await tweets.updateOne(
            { id: userid },
            {
                $push: {
                    tweets: {
                        tweetid,
                        tweetByUserId: userid,
                        tweetByUserName:userObj.username,
                        tweet,
                        likes: 0,
                        likedby: []
                    }
                }
            }
        )

        client.close()
        return tweetsArr
    } catch (err) {
        throw err
    }

}

module.exports = {
    fetchTweets,
    addTweet,
    fetchFollowingTweets,
}