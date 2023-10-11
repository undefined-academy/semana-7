import React from 'react';
import './App.css';
import MainNavbar from './MainNavbar.jsx';
import FeaturedPosts from './FeaturedPosts.jsx';
import PostListContainer from './PostListContainer.jsx';

function App() {
  const postCardsData = [
    {
      id: 1,
      imgUrl: 'https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      tags: ['Airdropss', 'Web3writing'],
      date: '2022-01-24',
      description: 'Airdrops? blockchains mas importantes para y como farmear...',
      authorImgUrl: 'https://i.pravatar.cc/300',
      authorName: 'TSAD',
      readingTime: '7 min lectura'
    },
    {
      id: 2,
      imgUrl: 'https://images.unsplash.com/photo-1503642551022-c011aafb3c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      tags: ['Web3writing', 'Copywriting'],
      date: '2023-01-24',
      description: 'Como comenzar una carrera como escritor sobre temas de web3 ?...',
      authorImgUrl: 'https://i.pravatar.cc/300',
      authorName: 'TSAD',
      readingTime: '7 min lectura'
    }
  ];

  return (
    <div className="App">
      <MainNavbar />
      <FeaturedPosts />
      <PostListContainer postCardsData={postCardsData} />
    </div>
  );
}

export default App;
