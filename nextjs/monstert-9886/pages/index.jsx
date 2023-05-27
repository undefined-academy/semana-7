import React, { useEffect, useState } from 'react';
//import 'components/src/App.css';
import MainNavbar from 'components/src/MainNavbar.jsx';
import FeaturedPosts from 'components/src/FeaturedPosts.jsx';
import PostListContainer from 'components/src/PostListContainer.jsx';
import DogCard from '@/components/src/DogCard';
import axios from 'axios';

function App() {
  const [dogBreeds, setDogBreeds] = useState([]);

  useEffect(() => {
    const getDogBreeds = async () => {
      try {
        const res = await axios.get('https://api.thedogapi.com/v1/breeds');
        const mappedData = res.data.map(breed => ({
          id: breed.id,
          imgUrl: breed.image.url,
          tags: breed.temperament ? breed.temperament.split(', ') : [],
          date: '2022-01-24',
          description: breed.name,
          authorName: 'TSAD',
          authorImgUrl: 'https://images.unsplash.com/photo-1565130961938-1c76efbbba1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0OTYzNDk4fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
          readingTime: '7 min lectura'
        })).slice(0, 10);
        setDogBreeds(mappedData);
      } catch (error) {
        console.error(error);
      }
    };

    getDogBreeds();
  }, []);

  return (
    <div className="App">
      <MainNavbar />
      <FeaturedPosts />
      <PostListContainer postCardsData={dogBreeds} />
    </div>
  );
}

export default App;
