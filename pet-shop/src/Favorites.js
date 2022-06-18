import React, {useContext, Button} from 'react';
import {UserContext} from './Context';

function Favorites() {
  const user= useContext(UserContext);
  
  return (
    <>
    <div>{user}</div>
    </>
  )
}

export default Favorites;