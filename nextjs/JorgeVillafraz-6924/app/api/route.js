async function getDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return data;
}

function getBreeds(data) {
  const breeds = Object.keys(data.message);
  return breeds;
}

function getRandomBreeds(breeds) {
  const randomBreeds = [];
  while (randomBreeds.length < 12) {
    const randomIndex = Math.floor(Math.random() * breeds.length);
    if (!randomBreeds.includes(breeds[randomIndex])) {
      randomBreeds.push(breeds[randomIndex]);
    }
  }
  return randomBreeds;
}

async function getDogByBreed(breed) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const data = await response.json();
  return data;
}

async function getDogsDetails(breeds) {
  const dataMapped = breeds.map(async (breed) => {
    const data = getDogByBreed(breed);
    const { message, status } = await data;
    return { breed, status, message };
  });
  return Promise.all(dataMapped);
}

export async function getDogsData() {
  const allBreeds = await getDogs();
  const arrayDogsBreeds = getBreeds(allBreeds);
  const randomBreeds = getRandomBreeds(arrayDogsBreeds);
  const dogsDetails = await getDogsDetails(randomBreeds);

  return dogsDetails;
}

export async function GET() {
  try {
    const response = await getDogsData();
    return Response.json(response, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }

  // return new Response(JSON.stringify(response), {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
}
