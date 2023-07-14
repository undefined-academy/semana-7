export default async function handler(req, res) {
  const listOfBreedsAndImages = await getBreedsAndImages();
  res.status(200).json(listOfBreedsAndImages);

}

async function getBreedsAndImages (){
  const breedsImagesSet = new Set;
  while (breedsImagesSet.size < 10){
    const response = await fetch("https://dog.ceo/api/breeds/image/random").then(
    (data) => data.json());
    const breed = response.message.split('/')[4];
    const image = response.message;
    const dog = {breed:`${breed}`, image:`${image}`};
    breedsImagesSet.add(dog);
  }
  const breedsImagesArr = [...breedsImagesSet];
  console.log(breedsImagesArr);
  return breedsImagesArr;
}

