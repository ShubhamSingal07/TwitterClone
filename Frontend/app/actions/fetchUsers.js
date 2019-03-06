const fetchUsers=async()=>{
    try{
        const res=await fetch('http://localhost:5000/api/home')
        return res.json().users
    }catch(err){
        console.log(err)
    }
}

export default fetchUsers;