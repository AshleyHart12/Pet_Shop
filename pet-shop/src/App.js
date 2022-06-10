import './App.css';
import PetCard from './PetCard.js';
import Favorites from './Favorites';
import ReactTooltip from "react-tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<PetCard />} />
        <Route path='/favorites' element={<Favorites />} />
        {/* <ReactTooltip id="pet-description" place="top" effect="solid" className='toolTip' >
              Animal Description
        </ReactTooltip> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;