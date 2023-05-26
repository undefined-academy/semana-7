export default async (req, res) => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    const breeds = Object.keys(data.message).slice(0, 10); // Obtén las primeras 10 razas
    
    const dogs = await Promise.all(
      breeds.map(async (breed) => {
        const breedResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const breedData = await breedResponse.json();
        return {
          name: breed,
          image: breedData.message,
        };
      })
    );
    
    res.status(200).json(dogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las razas de perros.' });
  }
};
