import React, { useEffect, useState } from "react";
import DogCard from "./DogCard";

const DogList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dog');
        const data = await response.json();
        setBreeds(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (breeds.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-container">
      {breeds.map((breed) => (
        <DogCard
          key={breed.breed}
          breed={breed.breed}
          image={breed.image}
          description={breed.description}
        />
      ))}
    </div>
  );
};

export default DogList;


