// src/PostCard.jsx
import React, { Fragment } from 'react';

function PostCard({ imgUrl, tags, date, description, authorImgUrl, authorName, readingTime }) {
  return (
    <Fragment>
      <article className="card">
        <img src={imgUrl} alt="Imagen de un post" />
        <section>
          <div className="card-content">
            <header>
              <div className="tags">
                {tags.map((tag, index) => (
                  <span key={index} className="tag tag-primary"><a href="#">{tag}</a></span>
                ))}
              </div>
              <h2 className="heading heading-sm font-bold"></h2>
              <time className="help-text paragraph paragraph-xs font-regular" dateTime={date}>
                {date}
              </time>
            </header>
            <p className="paragraph paragraph-sm font-regular">{description}</p>
          </div>
          <footer>
            <div className="author">
              <img src={authorImgUrl} alt="Avatar de un autor" />
              <span className="paragraph paragraph-xs font-bold">{authorName}</span>
            </div>
            <span className="help-text paragraph paragraph-xs font-regular">
              {readingTime}
            </span>
          </footer>
        </section>
      </article>
    </Fragment>
  );
}

export default PostCard;
