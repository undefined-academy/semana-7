import { useState, useEffect } from "react"
import handler from '../pages/api/dogs'

const initialBreeds = [
    {
        id: 1,
        name: 'Boxer'
    },{
        id: 2,
        name: 'Husky'
    },{
        id: 3,
        name: 'Golden'
    },
];


const Select = () => {

    const [breeds, setBreeds] = useState(initialBreeds);

    useEffect(()=> {
        updateBreeds();
    }, []);

    // API call - w/ getBreeds function
    // Then set new state breeds w/ new values
    const updateBreeds = () => {
        handler()
            .then((newBreeds)=> {
                setBreeds(newBreeds);
            })
    }

  return (
     
    <select>
        <option>Choose a dog breed</option>
        { breeds && breeds.map((breed, index) => (
            <option key={index} value={breed.id}>{breed.name}</option> 
        ))}
    </select>
     
  )
}

export default Select