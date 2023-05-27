import axios from 'axios';

const API_URL = 'https://dog.ceo/api';

export async function getDogBreeds(limit = 10) {
  const response = await axios.get(`${API_URL}/breeds/list/all`);
  const breeds = Object.keys(response.data.message);
  const limitedBreeds = breeds.slice(0, limit);

  const breedImages = await Promise.all(
    limitedBreeds.map(async (breed) => {
      const res = await axios.get(`${API_URL}/breed/${breed}/images/random`);
      return { breed, image: res.data.message };
    })
  );

  return breedImages;
}
