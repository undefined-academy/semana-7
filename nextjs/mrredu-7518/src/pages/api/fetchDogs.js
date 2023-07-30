const urlDogs = "https://dog.ceo/api/breeds/image/random/12";

export default async function fetchDogs(req, res) {
  const response = await fetch(urlDogs);
  const data = await response.json();

  // Tomamos el array de vínculos
  const listDogs = data.message;

  // Por cada elementos del array, o sea, cada vínculo/link
  const listDogsMapped = listDogs.map((dog) => {
    const getBreed = (dog) => {
      // Buscamos el match entre /breeds/{el nombre de la raza}/
      const match = dog.match(/breeds\/(.*?)\//);
      // Retornamos el nombre de la raza del perro
      return match ? match[1] : null;
    };
    const breed = getBreed(dog);

    // Reemplazamos los guíones por espacios
    const breedWithoutHyphen = breed.replaceAll("-", " ");

    // Ponemos la primera letra del string en mayúscula
    const capitalizeFirstLetter = (breedWithoutHyphen) => {
      return (
        breedWithoutHyphen.charAt(0).toUpperCase() + breedWithoutHyphen.slice(1)
      );
    };
    const name = capitalizeFirstLetter(breedWithoutHyphen);

    return {
      imgUrl: dog,
      name: name,
    };
  });

  res.json(listDogsMapped);
}
