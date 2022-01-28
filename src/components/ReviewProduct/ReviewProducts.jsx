import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Product/Product.css";

const ReviewProducts = (props) => {
  const { name, price, quantity, key } = props.product;
  return (
    <div>
      <div className="product">
        <div>
          <h4 className="product-name">{name}</h4>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
          <p>Price: {price}</p>
          <br />
          <button
            onClick={() => props.handleRemove(key)}
            className="btn-regular"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProducts;
<h1>Review Products</h1>;
