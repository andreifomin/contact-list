import React from "react";
import ContactItem from "./ContactItem";

function All(props) {
  const { allContacts, deleteContact, editContact } = props;

  return (
    <div>
      <h2>All contacts</h2>

      <ol>
        {allContacts.map((elem) => (
          <ContactItem
            key={elem.id}
            contact={elem}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        ))}
      </ol>
    </div>
  );
}

export default All;
