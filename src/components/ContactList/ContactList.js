import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div className="contactListContainer">
      {props.contacts.map((item, index) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.photo} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.lastName}</Card.Text>
            <div className="contactListBtns">
              <Button
                className="contactListBtn"
                id="btn1"
                onClick={() => props.handleDeleteContact(item.id)}
                variant="primary"
              >
                Delete
              </Button>
              <Button
                className="contactListBtn"
                id="btn2"
                onClick={() => props.handleEditIndex(index)}
                variant="primary"
              >
                Edit
              </Button>
              {""}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
