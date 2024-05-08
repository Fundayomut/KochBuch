import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ModalMy(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="maincontainer">
      <div>
        <Button variant="primary" onClick={handleShow}>
          Information
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title> {props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Mealtime :</h4>
            <ul className="type">
              {props.type.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4>Healty Information :</h4>
            <ul>
              {props.health.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
