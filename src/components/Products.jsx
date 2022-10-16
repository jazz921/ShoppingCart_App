import React from "react";
import { ACTIONS } from "../reducers/cartReducer";

const Products = ({ state, dispatch }) => {
  const capitalizeText = (text) => {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  };

  const addtoCart = (id, price) => {
    if (state.cart.map((e) => e.id).includes(id)) {
      alert('Cannot add to cart the same item. Bawal umulit, nag e-error :(')
      return;
    } else {
      dispatch({
        type: ACTIONS.INPUT_TO_CART,
        payload: state.products.find((prod) => prod.id === id),
      });
      dispatch({
        type: ACTIONS.ADD_TOTAL,
        payload: price,
      });
    }
  };

  return (
    <div className="products-container">
      {state.products &&
        state.products.map((e) => (
          <div key={e.id}>
            <img src={e.thumbnail} alt="" />
            <div>
              <p>{capitalizeText(e.title)}</p>
              <p style={{ fontWeight: "bold" }}>{`$${e.price}`}</p>
            </div>
            <button
              className="btn2cart"
              onClick={() => addtoCart(e.id, e.price)}
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default Products;
