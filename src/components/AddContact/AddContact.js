import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");


  function handleClick() {
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
  }

  return (
      <div>
        <h3 style={{marginLeft: '45%', marginTop: "5%"}}>Contact book</h3>
      <input style={{marginLeft: "30%", marginTop:"8%"}}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input style={{marginLeft: "1%"}}
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Surname"
        value={surname}
      />
      <input style={{marginLeft: "1%"}}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Number"
        value={phone}
      />
       <Button style={{marginLeft:"1%"}} variant="primary" onClick={handleClick}>Add contact</Button>{' '}
    </div>
  );
};

export default AddContact;
