import axios from "axios";

const URL_API = "https://dog.ceo/api/breeds/image/random";

export const getDogs = async (res, req) => {
  try {
    const dogs = [];
    for (let i = 0; i < 12; i++) {
      const response = await axios.get(URL_API);
      dogs.push(response.data);
    }
    return dogs;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
