import React from 'react';

export default function DogCard({ breed, image }) {
  return (
    <article className="card">
      <img src={image} alt={`Imagen de ${breed}`} />
      <section>
        <div className="card-content">
          <header>
            <h2 className="heading heading-sm font-bold">{breed}</h2>
          </header>
        </div>
      </section>
    </article>
  );
}
