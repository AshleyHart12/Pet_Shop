import React, { useState, useEffect } from "react";
import {Card, Button, Container, Row} from "react-bootstrap";

function PetCard() {
  const [pets, setPets] = useState([]);
  const [input, setInput] = useState('');

  const url = `https://api.petfinder.com/v2/animals?type=${input}&page=2`;

  function callApi() {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsS3ZzbWFZcktLVzQ2ald1N3FsYTIyN3l3T2VNN1N2QXRveUhYdWduUnczclNuVUF4NSIsImp0aSI6ImE5M2E2ZTJiZWQwYmRlN2VjNjgxNWJiMTJiMjE3OWRlOTAyYjE0NWJiMDRjYTFlMDViODVjMzgwNzllNTM2YzE4YmUyYmE5Y2VhMWE3NmFhIiwiaWF0IjoxNjUzMzQ3MDA3LCJuYmYiOjE2NTMzNDcwMDcsImV4cCI6MTY1MzM1MDYwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.aO725h7VK20tdfKJ680-zwZRXGfTkEoj4YHNIK9bzhlz5NAek6DWyXb-VpdZ1ttQt-jVDXGhvfvGb8CK3l52I0Rk6127CO0FAs-bWKasaM7_K97zFdu0aBua_CVpRHjbS8VSuQWd3iyupZbDIGHiwfemQhTlDUryEaC4lPRuDbE2Mmvp-71EmqDiE36BzSnN6PSqA4qSEhvOGnc6Dl6_Hh-4iIM-WoW5Y-s1PjbpiRglHsQpPwoDdgaJideIEce6tx9cl0CzOR4tP6hUtUJ4Xf1hRRfhEMh9twocn4ShfkR8mD8Q2KoxdncHr7PrwiXj2kbUOfXTRakZ-uMvzoTjuw",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPets(data.animals);
        console.log(pets);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    callApi();
  }, []);

  function getInput(e) {
    setInput(e.target.value);
  }

  function getAnimal() {
    console.log({input})
    callApi();
  }

  return (
    <>
    <input 
    type='text'
    value={input}
    onChange={getInput}
    />
    <Button onClick={getAnimal}>Get Animals</Button>
    <Container id='pet-container'>
      {pets.map((animal) => (
         <div>
         <Card style={{ width: "18rem" }} id='pet-card'>
         <Card.Img variant="top" src={animal.url} />
         <Card.Body>
           <Card.Title>{animal.name}</Card.Title>
           <Card.Text>
             {animal.description}
           </Card.Text>
           <Button variant="primary">View More Info</Button>
         </Card.Body>
       </Card>
       </div>
      ))}
    </Container>
    </>
  );
}

export default PetCard;
