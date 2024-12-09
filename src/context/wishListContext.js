"use client";

const { createContext, useReducer } = require("react");

export const wishlistedProductsContext = createContext(null);
export const wishlistedProductsDispatchContext = createContext(null);

const initialState = {
  wishlistedItems: [],
};
const wishlistedProductReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistedItems: [...state.wishlistedItems, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistedItems: [
          ...state.wishlistedItems.filter((eachItem) => {
            return eachItem.id !== action.payload.id;
          }),
        ],
      };
    default:
      return state;
  }
};

const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistedProductReducer, initialState);
  return (
    <wishlistedProductsContext.Provider value={state}>
      <wishlistedProductsDispatchContext.Provider value={dispatch}>
        {children}
      </wishlistedProductsDispatchContext.Provider>
    </wishlistedProductsContext.Provider>
  );
};
export default WishlistContextProvider;
