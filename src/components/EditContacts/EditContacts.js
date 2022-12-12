import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [surname, setSurname] = useState(props.editContact.surname);
  let [phone, setPhone] = useState(props.editContact.phone);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.surname = surname;
    contact.phone = phone;

    props.handleSaveEditedContact(contact)
    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <div style={{marginLeft: "30%", marginTop: "2%"}}>
      <input 
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input style={{marginLeft: "20px"}}
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Surname"
        value={surname}
      />
      <input style={{marginLeft: "19px"}}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Number"
        value={phone}
      />
      <Button style={{marginLeft: "2%"}} variant="success" onClick={handleSaveClick}>Save</Button>{' '}
    </div>
  );
};

export default EditContacts;
