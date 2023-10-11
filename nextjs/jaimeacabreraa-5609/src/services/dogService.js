import axios from 'axios'
const URL = 'https://dog.ceo/api/breeds/image/random';

export const getData = async () => {
    try {
        const dogs = []
        for (let i = 0; i < 10; i++) {
            const response = await axios.get(URL);
            dogs.push(response.data)
        }
        return dogs;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};
