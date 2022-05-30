import React, { useState, useEffect } from "react";
import { Card, Button, Container, ModalHeader, Modal } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

function PetCard() {
  const [pets, setPets] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const url = `https://api.petfinder.com/v2/animals?type=${input}&page=2`;

  function callApi() {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsS3ZzbWFZcktLVzQ2ald1N3FsYTIyN3l3T2VNN1N2QXRveUhYdWduUnczclNuVUF4NSIsImp0aSI6IjQ5YTlmZmFmMjdhMTUwMjM4YjAwODc0MDNkNjkwZjczNTZlZThjZTI2ODY0MmM4YmZjNzQ0YzFhM2E4ZjExMDdkMTljNGE5YjdiYTU5NjI1IiwiaWF0IjoxNjUzOTIzMjU0LCJuYmYiOjE2NTM5MjMyNTQsImV4cCI6MTY1MzkyNjg1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.l8FksiED4qv3bDvzacbSJQmvS1V7J7x4UAEAmUi1rifJJrDHerNjPkVMkdzOdZckgvW6zSJ61A1o3Xhjdi2g5kffMz64B5N9swX9bTVf7gcldmhLMHjgb8mi0vT63BGHglt3RRqlRX_QtaiWeuUeatfVw4pUPeWlFbiZ256GhOWOe9tSnJfTdgf08uRK9now7PiaA-FkZGR8-_bXZI1p8NgccbJUn1nxAZo-nVpVr2r77_RRCWWgTllkf0nAUCvNdQWF--7phXU9y5CFz8T_hREhEx0beeyZZA0i6UfImPY8Amj9fXF_hRMNzXWvS6yCMmKOt9hxky7DyyM-7T8X4Q",
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

  function getInput(e) {
    setInput(e.target.value);
  }

  function getAnimal() {
    callApi();
  }

  return (
    <>
      <h1>Let's find your new best friend!</h1>
      <input
        type="text"
        value={input}
        onChange={getInput}
        placeholder="What type of animal are you interested in?"
        id='user-input-box'
      />
      <Button onClick={getAnimal} id='get-animal-button'>Get Animals</Button>
      <Container id="pet-container">
        {pets.map((animal) =>
          pets.length > 0 ? (
            <div>
              <Card style={{ width: "18rem" }} id="pet-card" key={animal.id}>
                <Card.Img
                  variant="top"
                  style={{ width: "100px" }}
                  src=
                  // {
                  //   animal.photos[0].small === undefined
                  //     ? 
                      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2Fpco%2F5rb%2Fpco5rbqcE.jpg&f=1&nofb=1"
                  //     : animal.photos[0].small
                  // }
                  alt="this pets photo"
                />
                <Card.Body key={animal.id}>
                  <Card.Title className="dark-text animal-name">{animal.name}</Card.Title>
                  <Card.Text data-tip data-for="pet-description">
                    {animal.description}
                  </Card.Text>
                  {/* <ReactTooltip id="pet-description" place="top" effect="solid" className='toolTip' >
              {animal.description}
              </ReactTooltip> */}
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="more-info-button"
                  >
                    View More Info
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <h1>No Animals</h1>
          )
        )}
      </Container>
    </>
  );
}

export default PetCard;
