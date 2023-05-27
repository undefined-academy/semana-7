import React, { Fragment } from 'react';
import PostCard from './PostCard.jsx';

function PostListContainer({ postCardsData }) {
  return (
    <Fragment>
      <section className="post-list-container">
        <div className="post-card-container">
          {postCardsData.map((post, index) => (
            <PostCard
              key={post.id}
              imgUrl={post.imgUrl}
              tags={post.tags}
              date={post.date}
              description={post.description}
              authorImgUrl={post.authorImgUrl}
              authorName={post.authorName}
              readingTime={post.readingTime}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default PostListContainer;
