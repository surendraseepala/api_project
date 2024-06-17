// const URL="https://api.coindesk.com/v1/bpi/currentprice.json"
// const apiTesting=async()=>{
//    try{ let response=await fetch(URL)
//     console.log(response)
//     let res=await response.json()
//     console.log(res.bpi)
//     console.log(res.bpi.EUR.description)
//     console.log(res.bpi.EUR.rate)
//    }catch(err){
//     console.log('error',err)
//    }
// }
// apiTesting()
// var btn=document.querySelector('button')
// const disAct=()=>{
//     var divAct=document.getElementById('activity')
//     divAct.textContent=act
// }
// disAct(act)



// const url="https://www.boredapi.com/api/activity"
// const randomData=()=>{
//     fetch(url)
//         .then(response=>{
//             console.log(response)
//             return response.json()
//         })
//         .then(data=>{
//             console.log(data)
//            let act= data.activity
//            console.log(act)
//             // console.log(data.type)
//             // console.log(data.participants)

            

//         })
//         .catch(err=>{
//             console.log(err)
//         })
// }
// btn.addEventListener('click',randomData)

const url='https://dog.ceo/api/breeds/image/random'
const getImg=()=>{
    fetch(url)
    .then(res=>{
        console.log(res)
        return res.json()
    })
    .then(data=>{
        console.log(data)
        const img=document.createElement('img')
        img.src=data.message
        img.alt='img here'
        document.body.appendChild(img)
    })
    .catch(err=>{
        console.log(err)
    })
}
getImg()