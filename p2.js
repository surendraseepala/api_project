var btn=document.querySelector('#btn') 
var fact=document.querySelector('#factPara')
const url='https://api.agify.io/?name=meelad'
const getData=async()=>{
   try{
    console.log('getting the data...')
    let res=await fetch(url)
    console.log(res)
    let data=await res.json()
    console.log(data.name)
    fact.innerText = `Name: ${data.name}, Age: ${data.age}`; // Displaying name and age

}
catch(err){
console.log(`err:${err}`)
}
}

btn.addEventListener('click',getData)