const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const twitterdbname = 'twitterdb'
const twitter = 'twitter'

module.exports={
    MongoClient,
    url,
    twitterdbname,
    twitter
}