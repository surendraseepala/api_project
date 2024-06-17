 const userCredentials = {
    username: 'Sai',
    mail: 'sai@gmail.com',
    id: '001'
};

const postData = async () => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', options);

        if (!response.ok) {
            throw Error(response.status);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

postData();
