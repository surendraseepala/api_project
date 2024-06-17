

const UserDetails={
    name:'charan',
    age:22,
    mail:'ch@gmail.com'
}
const postData=async()=>{
    const Options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },body:JSON.stringify(UserDetails)
    }
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts',Options)
        if(!response.ok){
            throw Error(response.status)
        }
        const data=await response.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
postData()