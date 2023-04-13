import React from "react";
import { Route, Routes } from "react-router";
import All from "../components/contacts/All";
import Family from "../components/contacts/Family";
import Friends from "../components/contacts/Friends";
import Colleagues from "../components/contacts/Colleagues";
import CreateNewContact from "../components/CreateNewContact";

function Router(props) {
  const { contacts, addContact, deleteContact, editContact } = props;

  return (
    <Routes>
      <Route
        path="/all_contacts"
        element={
          <All
            allContacts={contacts}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        }
      />
      <Route
        path="/family"
        element={
          <Family
            family={contacts.filter((elem) => elem.category === "Family")}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        }
      />
      <Route
        path="/friends"
        element={
          <Friends
            friends={contacts.filter((elem) => elem.category === "Friends")}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        }
      />
      <Route
        path="/colleagues"
        element={
          <Colleagues
            colleagues={contacts.filter(
              (elem) => elem.category === "Colleagues"
            )}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        }
      />
      <Route path="/" element={<CreateNewContact addContact={addContact} />} />
    </Routes>
  );
}

export default Router;
