import React, { useEffect, useState } from "react";

// Utils
import { get } from "@/utils/http";

// Components
import DogCard from "../DogCard";

// Styles
import styles from "./DogList.module.css";

const DogsList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const getBreeds = async () => {
      const { breeds: data } = await get("/api/dog-breeds");
      setBreeds(data);
    };
    getBreeds();
  }, []);
  return (
    <div className={styles.container}>
      {breeds.map(({ breed, image }, idx) => (
        <DogCard key={`breed-${idx}`} breed={breed} src={image} />
      ))}
    </div>
  );
};

DogsList.propTypes = {};

export default DogsList;
