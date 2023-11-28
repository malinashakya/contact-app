//useState:you can manage the changing information within your app (like the toys in your box)
//useEffect: make sure certain tasks are done at the right time (like taking care of your plant) without needing to write a lot of extra code
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom"; // Import the Routes component
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          {" "}
          {/* Wrap your routes in a Routes component */}
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />{" "}
          {/* Use 'element' prop to render the component */}
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />{" "}
          {/* Use 'element' prop to render the component */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
