"use client";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const CardContainer = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const getDogs = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setDogs(data);
    };
    getDogs();
  }, []);

  return (
    <>
      <main className="bg-slate-800 p-10 pt-20 rounded-lg lg:pb-20 lg:pt-[120px]">
        <section className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dogs.map((dog) => (
            <SingleCard
              key={dog.breed}
              CardTitle={dog.breed}
              image={dog.message}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default CardContainer;
