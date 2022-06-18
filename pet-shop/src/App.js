import React, {useState, useEffect} from 'react';
import './App.css';
import PetCard from './PetCard.js';
import Favorites from './Favorites';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {UserContext} from './Context';


function App() {
  const [pets, setPets] = useState([]);

  const url = `https://api.petfinder.com/v2/animals?type=dog&page=2&limit=10`;

  function callApi() {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsS3ZzbWFZcktLVzQ2ald1N3FsYTIyN3l3T2VNN1N2QXRveUhYdWduUnczclNuVUF4NSIsImp0aSI6ImQyYjUyMjRkNWQyYzNiZmJlNzhkMzA3OTBkY2NkZTM4NDI1OGEwNmU4MGIzMTY5YjE5OGVhMTJlMTU1MTI0MzNhZGQ2MmQ1YzkwMzc5OTBjIiwiaWF0IjoxNjU1NTg3MDMyLCJuYmYiOjE2NTU1ODcwMzIsImV4cCI6MTY1NTU5MDYzMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.RUv3mWLst4d9NxvgAaZb_y28ipJkWqz82-GO9Befki9SJL8NmiSyAkaXUo9UprXKld2QJX3bjQsD4R__BD4DgDVXHClgblbuENvffk8tBcTyvDS0abpykG_bUz_bAvj1Mw72vmWPcqiGtTC17QE9wRMLDLHmcqpF3PM4uHYTPpboaCACGkl9wNRy8ur7xdh2DxnPWyGknR9LPcmuB4Axg3Hnd25V1m25NJJMlv1zgQKsNzx2_01NnWMTeZqGfz7Dd4U9f2g-S3HhjYkmd3GSdArs4Z6UKk3qlva_ovtg3vMuOCZ1EVuaM-1QKzca75NsJmFMo2PHGgVqJxCfE-F3iQ",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPets(data.animals);
        console.log(data.animals)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    callApi();
  }, []);
  return (
    <BrowserRouter>
    <UserContext.Provider value={{pets: pets}}>
       <Routes>
        <Route path='/' element={<PetCard />} />
        <Route path='/favorites' element={<Favorites />} />
        </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;