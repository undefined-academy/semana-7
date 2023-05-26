import React from "react";

export default function Card({ title, image, idx }) {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="img_container">
          <img className="card-img-top" src={image} alt="Card image cap" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-uppercase text-center">{title}</h5>
        </div>
      </div>
    </div>
  );
}
