import React, { useState, useEffect } from "react";
import { Card, Button, Container, ModalHeader, Modal } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
// import ReactPaginate from "react-paginate";
// import Pagination from 'react-bootstrap/Pagination';


function PetCard() {
  const [pets, setPets] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const imageDefaultSrc =
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2Fpco%2F5rb%2Fpco5rbqcE.jpg&f=1&nofb=1";

  const url = `https://api.petfinder.com/v2/animals?type=${input}&page=${pageNum}&limit=10`;

  function callApi() {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsS3ZzbWFZcktLVzQ2ald1N3FsYTIyN3l3T2VNN1N2QXRveUhYdWduUnczclNuVUF4NSIsImp0aSI6IjEzZjdiM2I5OTUwMWJmMThlMmQzZGRhYzI3ZmRhNGUyMTkxMmQ2Y2VmNGFkZGJlNjQwYThlODM1NWJkNmE3NjI2NGRmNjVjNWNhMTdjZTc1IiwiaWF0IjoxNjU0MTMyOTE0LCJuYmYiOjE2NTQxMzI5MTQsImV4cCI6MTY1NDEzNjUxNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.rzM_osZeyQeYO09XeuO9PVKwMLMePeB77l72ryYtHI5WNX4VlYCrO0JrG68Tj7254iYuq_tvrTHuTQ6rVc-XbNGphLkOXoRHT_0OR94riNkgbrDk1q7RkED6flHoes30-ElhNXAdQROyknXbpGh-SbdtOYt325kO4BePxJawNc6Mgi5dGSp9BzeMomK2hr5btYu0qD-05QYagW2uvWaevHc8WkaNNGGeFj8SKhJI-wQma-QC6AYWR8sGdeM-KXan9Mu9V_b7TdiajGJ-yc609LDDDPcx63suGePwZazr52mpCTVw1GsVfV06w7Ofl0eiviSwveZDo3YmAmyS2EjMpw",
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
  }, [pageNum]);

  function getInput(e) {
    setInput(e.target.value);
  }

  function getAnimal() {
    callApi();
    setInput('');
  }

  const viewMore = () => {
    setPageNum(pageNum + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  }

  if (pets) {
    return (
      <>
        <h1>Let's find your new best friend!</h1>
        {/* <div>{displayPets}</div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={totalPages}
          onPageChange={changePage}
        />; */}
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
          {pets.map((animal) =>
            pets.length > 0 ? (
              <>
              <div>
                <Card style={{ width: "18rem" }} id="pet-card" key={animal.id}>
                  <Card.Img
                    variant="top"
                    style={{ width: "100px" }}
                    src={
                      animal.photos[0]
                        ? animal.photos[0].small
                        : { imageDefaultSrc }
                    }
                    alt="this pets photo"
                  />
                  <Card.Body key={animal.id}>
                    <Card.Title className="dark-text animal-name">
                      {animal.name}
                    </Card.Title>
                    <Card.Text
                      data-tip
                      data-for="pet-description"
                      className="pet-description"
                    >
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
                {/* <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal> */}
              </div>
              
              </>
            ) : (
              <h1>No Animals</h1>
            )
          )}
        </Container>
        <Button onClick={viewMore} className='button'>Next 10</Button>
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
