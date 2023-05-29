import Dog from "@/components/Dog/Dog";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async (res, req) => {
      try {
        const dogs = await fetch("/api/dogs").then((res) => res.json());
        setDogs(dogs);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <title>Dog Breeds</title>
      <meta name="description" content="Dog Randomizing" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <h1 className="my-3 text-3xl text-center font-bold underline">
        DOG BREEDS
      </h1>
      <main className={`${styles.body}`}>
        {dogs.map((dog, index) => {
          return <Dog key={index} title={dog.title} img={dog.img} />;
        })}
      </main>
    </>
  );
}
