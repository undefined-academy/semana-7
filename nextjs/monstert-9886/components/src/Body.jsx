// src/Body.jsx
import React, { Fragment } from 'react';
import MainNavbar from './MainNavbar';
import FeaturedPosts from './FeaturedPosts';
import PostListContainer from './PostListContainer';

function Body() {
  return (
    <Fragment>
      <MainNavbar />
      <main>
        <FeaturedPosts />
        <PostListContainer />
      </main>
    </Fragment>
  );
}

export default Body;
