import React, {useContext, Button} from 'react';
import {PetState} from './PetCard';

function Favorites() {
  const user= useContext(PetState);

  const test = () => {
    console.log({user})
  }
  
  return (
    <PetState>
    <div>{user}</div>
    <Button onClick={test}>Test</Button>
    </PetState>
  )
}

export default Favorites;