export default async function handler(req, res) {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();

  const breeds = Object.keys(data.message);
  const randomBreeds = getRandomBreeds(breeds, 10);

  const dogDataPromises = randomBreeds.map(async (breed) => {
    const breedResponse = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const breedData = await breedResponse.json();

    const breedInfoResponse = await fetch(
      `https://es.wikipedia.org/api/rest_v1/page/summary/${breed}`
);
    const breedInfoData = await breedInfoResponse.json();

    const breedInfo = breedInfoData.extract || "";

    return {
      breed,
      image: breedData.message,
      description: breedInfo,
    };
  });

  const dogData = await Promise.all(dogDataPromises);

  res.status(200).json(dogData);
}

// Función para obtener n elementos aleatorios de un array
function getRandomBreeds(array, n) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

