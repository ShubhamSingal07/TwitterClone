const fetchTweets=async()=>{
    try{
        const res=await fetch('http://localhost:5000/api/home')
        return res.json().tweets
    }catch(err){
        console.log(err)
    }
}