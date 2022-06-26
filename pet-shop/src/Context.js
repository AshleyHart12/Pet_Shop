import { createContext } from "react";
 
export const UserContext = createContext({
    pets: []
});

export const FavoritesContext = createContext({
    favorites: []
});


