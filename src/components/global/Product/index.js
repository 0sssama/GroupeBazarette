import React from "react";

function Product({ data }) {
  return (
    <div className="Product flex flex-col items-center row-gap">
      <div className="Product-image">
        <img src={data.image} alt="product" className="covered-img" />
      </div>
      <div className="Product-name">
        <p>{data.name}</p>
      </div>
      <div className="Product-price">€{data.price}</div>
    </div>
  );
}

export default Product;
