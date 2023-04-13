import React from "react";
import ContactItem from "./ContactItem";

function Friends(props) {
  const { friends, deleteContact, editContact } = props;

  return (
    <div>
      <h2>Friends</h2>

      <ol>
        {friends.map((elem) => (
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

export default Friends;
