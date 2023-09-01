export default async function handler(req, res) {
  // Get all lisr dogs breads
  const dogsList = await fetch("https://dog.ceo/api/breeds/list/all").then(
    (data) => data.json()
  );


  const starNumber = Object.keys(dogsList.message).length - 10;
  const randomStartDog = Math.floor(Math.random() * starNumber);
  const endDog = randomStartDog+10;


  // Transform in a array of 10 elemets
  const onlyBreeds = Object.keys(dogsList.message).slice(randomStartDog, endDog);

  // Map breads and get a rtandom image for create the new object
  const mapDogs = await Promise.all(
    onlyBreeds.map(async (dog) => {
      const dogImages = await fetch(
        `https://dog.ceo/api/breed/${dog}/images/random`
      ).then((data) => data.json());

      return {
        name: dog.charAt(0).toUpperCase() + dog.slice(1),
        image: `${dogImages.message}`
      };
    })
  );

  res.status(200).json(mapDogs);
}
