import React from "react";
import { ACTIONS } from "../reducers/cartReducer";

const Cart = ({ state, dispatch }) => {
  return (
    <div className="cart">
      <h1>My Cart</h1>
      <h3>Total ${state.total}</h3>
      {state.cart < 1 ? (
        <h2 style={{textAlign: 'center', marginTop: '50px'}}>No items in cart yet</h2>
      ) : (
        state.cart.map((item) => (
          <div className="item-box" key={item.id}>
            <div className="items">
              <img src={item.thumbnail} alt={item.thumbnail} />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1vw",
                  padding: "0px 5px",
                }}
              >
                {item.title}
              </p>
              <div>
                <p style={{ fontWeight: "bold" }}>${item.price}</p>
              </div>
            </div>
            <button
              className="btn-rmv"
              onClick={() => {
                dispatch({
                  type: ACTIONS.REMOVE_FROM_CART,
                  payload: {
                    id: item.id,
                  },
                });
                dispatch({
                  type: ACTIONS.MINUS_TOTAL,
                  payload: item.price,
                });
              }}
            >
              Remove from Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
