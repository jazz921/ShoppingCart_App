import React, { useEffect, useReducer } from "react";
import { INITIAL_STATE, cartReducer, ACTIONS } from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { skip } = state;

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=12&skip=${skip}`
    );
    const data = await res.json();
    dispatch({
      type: ACTIONS.FETCH_PRODUCTS,
      payload: data.products,
    });
  };

  return (
    <div className="App">
      <main>
        <Cart state={state} dispatch={dispatch} />
        <Products state={state} dispatch={dispatch} />
      </main>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {skip < 12 ? (
          ""
        ) : (
          <button
            className="pg-btn"
            onClick={() => {
              dispatch({
                type: ACTIONS.PREV_PRODUCT,
              });
            }}
          >
            Previous
          </button>
        )}
        <button
          className="pg-btn"
          onClick={() => {
            dispatch({
              type: ACTIONS.NEXT_PRODUCT,
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
