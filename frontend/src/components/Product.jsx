import React from "react";

export default function Product(props) {
  return (
    <div>
      <img src={props.url} />
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}
