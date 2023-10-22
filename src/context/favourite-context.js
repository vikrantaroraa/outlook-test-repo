import { createContext, useContext, useReducer } from "react";

const FavouriteContext = createContext();

export const useFavourite = () => {
  return useContext(FavouriteContext);
};

export const FavouriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartAndWishlistReducer, {
    favourite: [],
  });

  return (
    <FavouriteContext.Provider value={{ state, dispatch }}>
      {children}
    </FavouriteContext.Provider>
  );
};

function cartAndWishlistReducer(state, action) {
  // console.log("YE HAI ACTION OBJECT: ", action);
  switch (action.type) {
    case "ADDTOFAVOURITE":
      return {
        ...state,
        favourite: [...state.favourite, { id: action.payload }],
      };
    default:
      return { ...state };
  }
}
