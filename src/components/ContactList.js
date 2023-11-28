import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom"; // we use {} when it is not exported defaultly

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main" style={{ marginTop: "80px" }}>
      <h2
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Contact List
        <Link to="/add">
          <button className="ui button blue" style={{ marginLeft: "auto" }}>
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
