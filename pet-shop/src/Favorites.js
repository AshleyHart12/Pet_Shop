import React, {useContext, Button} from 'react';
import {UserContext} from './Context';

function Favorites() {
  const user= useContext(UserContext);
  
  return (
    <>
   { user.favorites.map((pet) => {
      return (
          <div>{pet.name}</div>
          )
    })}

 
    </>
  )
}

export default Favorites;