import React, { useState, useEffect } from "react";
import { Card, Button, Container, ModalHeader, Modal } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

function PetCard() {
  const [pets, setPets] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageDefaultSrc = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2Fpco%2F5rb%2Fpco5rbqcE.jpg&f=1&nofb=1'

  const url = `https://api.petfinder.com/v2/animals?type=${input}&page=2`;

  function callApi() {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsS3ZzbWFZcktLVzQ2ald1N3FsYTIyN3l3T2VNN1N2QXRveUhYdWduUnczclNuVUF4NSIsImp0aSI6IjQ5ZmE4MjExMTdmNDIxYzYxMDE2MmZiMjllZjBjNTZmY2QzZDEwNGI3YjA1N2M3YWE0ZDAzNmM1ZGU3ZTNiYTg2OTlkOWMyMzYzMjcyNDE1IiwiaWF0IjoxNjUzOTI2ODgyLCJuYmYiOjE2NTM5MjY4ODIsImV4cCI6MTY1MzkzMDQ4Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.Oc20Z1SfL8vj8GkxSY-eiPP5kKeDjILqse8n59p3qJpcotL94Ls7S0xqtd2c-gYi4t3V7xjXTXm4mmL8ljQh8Xv8RLSywUBtf66BW2KfVMGexMlETrjFyDN3zLrOKrqvLwLfjxBHNk8VPBkZJYZfmFRoMUXx1bxlR9p5ISTt4azzShATJd51VWPlj-VfO9YCq7PpCiEZndMegZQ3eo_Re-CiPtwpO9-Za-lA926Okn2IA3JsedqhbWSsrRUmXd5Pe2O4538LG6O_hDpFJhfsmIfMOYZWrY2DqswN0cF9qZwseRvyCa-JDs_jPSEFYyzeAZl4EChXQqLklLBhuAytGA",
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

  if(pets){
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
      <Button onClick={getAnimal} id='get-animal-button' className='button'>Get Animals</Button>
      <Container id="pet-container">
        {pets.map((animal) =>
          pets.length > 0 ? (
            <div>
              <Card style={{ width: "18rem" }} id="pet-card" key={animal.id}>
                <Card.Img
                  variant="top"
                  style={{ width: "100px" }}
                  src= 
                  {
                    animal.photos[0] 
                      ? 
                      animal.photos[0].small
                      
                      : {imageDefaultSrc}
                  }
                  alt="this pets photo"
                />
                <Card.Body key={animal.id}>
                  <Card.Title className="dark-text animal-name">{animal.name}</Card.Title>
                  <Card.Text data-tip data-for="pet-description" className='pet-description'>
                    {animal.description}
                  </Card.Text>
                  {/* <ReactTooltip id="pet-description" place="top" effect="solid" className='toolTip' >
              {animal.description}
              </ReactTooltip> */}
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="more-info-button button"
                  >
                    View More Info
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ) : <h1>No Animals</h1>
          
        )}
      </Container>
    </>
  )}
  return (
    <>
    <h1>No Animals by this breed - Try Again</h1>
    <input
    type="text"
    value={input}
    onChange={getInput}
    placeholder="What type of animal are you interested in?"
    id='user-input-box'
  />
  <Button onClick={getAnimal} id='get-animal-button' className='button'>Get Animals</Button>
  </>
    )
  
}

export default PetCard;
