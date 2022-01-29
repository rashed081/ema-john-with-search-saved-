import React from "react";
import useProducts from "./../../hooks/useProducts";
import useCart from "./../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewProducts from "../ReviewProduct/ReviewProducts";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import { Link, useNavigate } from "react-router-dom";

const OrderReview = () => {
  const navigate = useNavigate();
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  const handlePlaceOrder = () => {
    navigate("/place-order");
    setCart([]);
    clearTheCart();
  };
  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {cart.map((product) => (
            <ReviewProducts
              kry={product.key}
              handleRemove={handleRemove}
              product={product}
            ></ReviewProducts>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <button className="btn-regular" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
