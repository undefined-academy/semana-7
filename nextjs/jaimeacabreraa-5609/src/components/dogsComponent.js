import React, { useEffect, useState } from 'react';
import { getData } from '../services/dogService';
import { v4 as uuidv4 } from 'uuid';

function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setDogs(result);
    };

    fetchData();
  }, []);

  return (
    <div className='container mt-5'>
      {
        dogs.length > 0 ?
          <h1 className='text-center'>🐶DOGS🐶</h1> :
          <div className='row justify-content-center mt-5'>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
      }
      <div className='row'>
        {dogs.map((dog) => (
          <img key={uuidv4()} className="ml-2 mt-2 col-md-4" src={dog.message} />
        ))}
      </div>
    </div>
  );
}

export default Dogs;