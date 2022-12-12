import React from "react";
import Button from 'react-bootstrap/Button';


const ContactsList = (props) => {

  return (
    <div>
      {props.contacts.map((item, index) => (
        <ul style={{listStyleType: "none", marginLeft: "29%", marginTop: "2%"}} key={item.id}>
          <li>1 {item.name}</li>
          <li>2 {item.surname}</li>
          <li>3 {item.phone}</li>
          <li>
          <Button variant="warning"onClick={() => props.handleDeleteContact(item.id)}>Delete</Button>{' '}
          <Button variant="warning"onClick={()=> props.handleEditIndex(index)}>Edit</Button>{' '}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactsList;
