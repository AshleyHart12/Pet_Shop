import React, { useState, useEffect, createContext, useContext } from "react";
import { Card, Button, Container } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import {UserContext} from './Context';


function PetCard() {
  const user = useContext(UserContext);
  // const [pets, setPets] = useState([]);
  const [input, setInput] = useState("");
  const [pageNum, setPageNum] = useState(1);
 
  // const url = `https://api.petfinder.com/v2/animals?type=${input}&page=${pageNum}&limit=10`;

  // function callApi() {
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Authorization:
  //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsS3ZzbWFZcktLVzQ2ald1N3FsYTIyN3l3T2VNN1N2QXRveUhYdWduUnczclNuVUF4NSIsImp0aSI6ImQyYjUyMjRkNWQyYzNiZmJlNzhkMzA3OTBkY2NkZTM4NDI1OGEwNmU4MGIzMTY5YjE5OGVhMTJlMTU1MTI0MzNhZGQ2MmQ1YzkwMzc5OTBjIiwiaWF0IjoxNjU1NTg3MDMyLCJuYmYiOjE2NTU1ODcwMzIsImV4cCI6MTY1NTU5MDYzMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.RUv3mWLst4d9NxvgAaZb_y28ipJkWqz82-GO9Befki9SJL8NmiSyAkaXUo9UprXKld2QJX3bjQsD4R__BD4DgDVXHClgblbuENvffk8tBcTyvDS0abpykG_bUz_bAvj1Mw72vmWPcqiGtTC17QE9wRMLDLHmcqpF3PM4uHYTPpboaCACGkl9wNRy8ur7xdh2DxnPWyGknR9LPcmuB4Axg3Hnd25V1m25NJJMlv1zgQKsNzx2_01NnWMTeZqGfz7Dd4U9f2g-S3HhjYkmd3GSdArs4Z6UKk3qlva_ovtg3vMuOCZ1EVuaM-1QKzca75NsJmFMo2PHGgVqJxCfE-F3iQ",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPets(data.animals);
  //       console.log(data.animals)
  //     })
  //     .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   callApi();
  // }, [pageNum]);

  function getInput(e) {
    setInput(e.target.value);
  }

  function getAnimal() {
    // callApi();
    // setInput('');
  }

  const viewMore = () => {
    setPageNum(pageNum + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

  const viewPrevious = () => {
    setPageNum(pageNum - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

  const addToFavorites = () => {
    console.log()
  }

  if (user.pets) {
    return (
      <>
      <a href='/favorites' style={{textDecoration: 'none', color: 'black'}}>
        <div>
        <span className="material-symbols-outlined" style={{color: '#F92C85'}}>
              favorite
        </span>
        <p style={{width: '200px'}}>My Favorites</p>
        </div>
      </a>
        <h1>Let's find your new best friend!</h1>
        <input
          type="text"
          value={input}
          onChange={getInput}
          placeholder="What type of animal are you interested in?"
          id="user-input-box"
        />
        <Button onClick={getAnimal} id="get-animal-button" className="button">
          Get Animals
        </Button>
        <Container id="pet-container">
          {user.pets.map((animal) =>
            user.pets.length > 0 ? (
              <>
              <div>
                <Card style={{ width: "18rem" }} id="pet-card" key={animal.id}>
                <span className="material-symbols-outlined" style={{color: '#F92C85', cursor: 'pointer'}} onClick={addToFavorites}>
                  favorite
                  </span>
                  <Card.Img
                    variant="top"
                    style={{ width: "100px" }}
                    src={
                      animal.photos[0]
                        ? animal.photos[0].medium
                        : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2Fpco%2F5rb%2Fpco5rbqcE.jpg&f=1&nofb=1"
                    }
                    alt="this pets photo"
                  />
                  <Card.Body key={animal.id}>
                    <Card.Title className="dark-text animal-name">
                      {animal.name}
                    </Card.Title>
                    <Card.Text
                      data-tip='pet-description'
                      data-for="pet-description"
                      className="pet-description"
                    >
                      {animal.description}
                    </Card.Text>
              <ReactTooltip />
              <a href={animal.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="more-info-button button"
              >
                      View More Info
                 </a>
                  </Card.Body>
                </Card>
              </div>
              
              </>
            ) : (
              <h1>No Animals</h1>
            )
          )}
        </Container>
        <Button onClick={viewPrevious} className='button nextBtn'>Previous 10</Button>
        <Button onClick={viewMore} className='button nextBtn'>Next 10</Button>

      </>
    );
  }
  return (
    <>
      <h1>No Animals by this breed - Try Again</h1>
      <input
        type="text"
        value={input}
        onChange={getInput}
        placeholder="What type of animal are you interested in?"
        id="user-input-box"
      />
      <Button onClick={getAnimal} id="get-animal-button" className="button">
        Get Animals
      </Button>
      
    </>
    
  );
  
}

export default PetCard;
