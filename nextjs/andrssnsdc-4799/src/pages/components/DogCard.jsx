import React from "react";

const DogCard = ({ breed, image, description }) => {
  const limitedDescription = description.split(" ").slice(0, 50).join(" ");

  return (
    <div className="card">
      <img src={image} alt={breed} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{breed}</h3>
        <p className="card-description">{limitedDescription}</p>
      </div>
    </div>
  );
};

export default DogCard;
