import React, {useContext, Button} from 'react';
import {UserContext} from './Context';

function Favorites() {
  const user= useContext(UserContext);
  
  return (
    <>
   { user.pets.map((pet) => {
      return (
          <h1>{pet.id}</h1>
          )
    })}

 
    </>
  )
}

export default Favorites;