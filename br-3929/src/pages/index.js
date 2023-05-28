import React from 'react';
import {getServerSideProps} from '@/pages/api/dog';

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.image} alt={post.name} />
            <p>{post.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export { getServerSideProps };
export default Home;
