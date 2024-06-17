
const url = 'https://dog.ceo/api/breeds/image/random';

const getImg = () => {
    fetch(url)
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data);
            // Create an img element and set its src attribute
            const img = document.createElement('img');
            img.src = data.message; // Assuming the image URL is in data.message
            img.alt = 'Random Dog';
            // Append the img element to the body or a specific element
            document.body.appendChild(img);
        })
        .catch(err => {
            console.log(err);
        });
}

getImg();
