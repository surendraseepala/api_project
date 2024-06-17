// let url="https://catfact.ninja/fact"
// let promise=fetch(url)
// // console.log(promise)
// const getData=async()=>{
//     let response=await fetch(url)
//     console.log(response)
//     let res=await response.json()
//     console.log(res)
// }
 
// let url="https://api.publicapis.org/entries"
// const getFacts=async()=>{
//     let res=await fetch(url)
//     console.log(res)
//     let r=await res.json()
//     console.log(r)
// }
const btn=document.querySelector('#btn')
const para=document.querySelector('#Spell')

let url="https://wizard-world-api.herokuapp.com/Spells"
// const getSpells=async()=>{
//     let response=await fetch(url)
//     console.log(response)
//     let data=await(response.json())
//     console.log(`Spell name:${data[1].name},Effect:${data[1].effect}`)
//     para.innerText=`Spell name:${data[1].name},Effect:${data[1].effect}`
// }
//promise chaining
const getspells=()=>{
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        para.innerText=`spell: ${data[1].name},effect ${data[1].effect}`
    })
}
btn.addEventListener('click',getspells)

// btn.addEventListener('click',getSpells)
// const btn = document.querySelector('#btn');
// const para = document.querySelector('#Spell');

// let url = "https://wizard-world-api.herokuapp.com/Spells";

// const getRandomSpell = (data) => {
//     const randomIndex = Math.floor(Math.random() * data.length);
//     const spell = data[randomIndex];
//     return spell;
// };

// const displaySpell = (spell) => {
//     para.innerText = `Spell name: ${spell.name}, Effect: ${spell.effect}`;
// };

// const getSpells = async () => {
//     try {
//         let response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         let data = await response.json();

//         // Get a random spell from the data
//         const randomSpell = getRandomSpell(data);

//         // Display the spell information
//         displaySpell(randomSpell);
//     } catch (error) {
//         console.error("Error fetching spells:", error);
//     }
// };

// btn.addEventListener('click', getSpells);
