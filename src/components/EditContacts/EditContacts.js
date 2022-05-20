import React, { useState } from "react";
import "./EditContacts.css";

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [lastName, setLastName] = useState(props.editContact.lastName);
  let [photo, setPhoto] = useState(props.editContact.photo);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.lastName = lastName;
    contact.photo = photo;
    props.handleSaveEditedContact(contact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <div className="EditStyle">
      <input
        className="edits"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        className="edits"
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="LastName"
        value={lastName}
      />
      <input
        className="edits"
        onChange={(e) => setPhoto(e.target.value)}
        type="text"
        placeholder="URL Photo"
        value={photo}
      />
      <button className="saveBtn" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
};

export default EditContacts;
