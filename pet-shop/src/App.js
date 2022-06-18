import './App.css';
import PetCard from './PetCard.js';
import Favorites from './Favorites';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {UserContext} from './Context';

function App() {
  return (
    <BrowserRouter>
    <UserContext.Provider value='Hello Context'>
       <Routes>
        <Route path='/' element={<PetCard />} />
        <Route path='/favorites' element={<Favorites />} />
        </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;