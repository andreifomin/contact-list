import React from "react";
import ContactItem from "./ContactItem";

function Colleagues(props) {
  const { colleagues, deleteContact, editContact } = props;

  return (
    <div>
      <h2>Colleagues</h2>

      <ol>
        {colleagues.map((elem) => (
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

export default Colleagues;
