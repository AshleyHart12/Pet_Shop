import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function PetModal(props) {
  const [isModalOpen, setModal] = React.useState(false)
  const initModal = () => {
    return setModal(!false)
  }

  return (
    <>
      <Button variant="primary" onClick={initModal}>
        More Info
      </Button>

      <Modal show={isModalOpen}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          HELLO
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}