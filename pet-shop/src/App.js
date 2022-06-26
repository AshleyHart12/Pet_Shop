import React, {useState, useEffect} from 'react';
import './App.css';
import PetCard from './PetCard.js';
import Favorites from './Favorites';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {UserContext, FavoritesContext} from './Context';


function App() {
  const [pets, setPets] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  
  // const addFavoritePetEvent = (payload) => {
  //   setFavorites([...favorites, payload.newUser])
  // }

  const url = `https://api.petfinder.com/v2/animals?type=dog&page=2&limit=10`;

  function callApi() {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsS3ZzbWFZcktLVzQ2ald1N3FsYTIyN3l3T2VNN1N2QXRveUhYdWduUnczclNuVUF4NSIsImp0aSI6ImMwY2NlNmVjOWM5Yzk2NmU1MDc1ZGQwNDcwM2U4N2ZlYjdmYjlhMzQ2MDQ3YmNiMDlhYTM0Y2ZmMDU1YmY2NzdhYzgwNmMyYzY1NTYwZGI0IiwiaWF0IjoxNjU2MTg5NjM0LCJuYmYiOjE2NTYxODk2MzQsImV4cCI6MTY1NjE5MzIzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.hXgcXTz5TCOWl8OB9b99pw6TkyfwtyeAKG636VTcg_-Q2km7NrttYh732NfVZ1Ew3hcsaf48WgQV3j15m1E9weSzHM7-2Y0h5AGqDVgdK6WFrql2f2znM0ySoXl63t6AatGsSg9xDh-DLTxqh03DUa8Tqqj0sNpfB4otEHbTx9f_CqYvFVQq7whFSOF09s0K39MdvAJC6sT85gDba4JUjp9E6RNEpFYEwDyCh-Z1NU5OIFKE1rHqNf7ojUJFVRA9YSMZ-JqNnyITiYnmxIqWOCM1-q-Qo1a98B17q882xSflGBzGnarBfGzK55sbDfQHDAUAfWUZnGm-dJNxsbbjTQ",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPets(data.animals);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    callApi();
  }, []);
  return (
    <BrowserRouter>
    <UserContext.Provider value={{pets}}>
      <FavoritesContext.Provider value={{}}>
       <Routes>
        <Route path='/' element={<PetCard />} />
        <Route path='/favorites' element={<Favorites />} />
        </Routes>
        </FavoritesContext.Provider>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;