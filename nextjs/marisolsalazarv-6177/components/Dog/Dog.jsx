import React, { useEffect, useState } from "react";
import { getDogs } from "@/../pages/api/dogs.js";

function Dog() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDogs();
      setDogs(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-3xl text-center font-bold underline">DOG BREEDS</h1>
      <div className="flex w-full justify-around m-auto flex-wrap">
        {dogs.map((dog) => (
          <div className="flex w-1/3 h-[380px] m-auto md:py-6 px-6">
            <img
              className="w-full h-[380px] m-auto md:py-4 justify-center"
              src={dog.message}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dog;
