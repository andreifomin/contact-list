import React from "react";
import ContactItem from "./ContactItem";

function Family(props) {
  const { family, deleteContact, editContact } = props;

  return (
    <div>
      <h2>Family</h2>

      <ol>
        {family.map((elem) => (
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

export default Family;
