import { createContext, useState } from "react";
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FovitesContextProvider({ children }) {
  const [favoritesFoodIds, setFavoritesFoodIds] = useState([]);
  function addFavorite(id) {
    setFavoritesFoodIds((current) => [...current, id]);
  }
  function removeFavorite(id) {
    setFavoritesFoodIds((current) => current.filter((fooId) => fooId !== id));
    //burda eğerbenim verdiğim id eşit ise onun haricindekini filterler gerisini döndürün
  }

  const value = {
    ids: favoritesFoodIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FovitesContextProvider;
