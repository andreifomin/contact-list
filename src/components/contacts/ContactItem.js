import React, { useState } from "react";

function ContactItem(props) {
  const { contact, deleteContact, editContact } = props;

  const [isInEdit, setIsInEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.number);
  const [category, setCategory] = useState(contact.category);

  const handleButtonSave = () => {
    const newContact = {...contact, name, number: phone, category};
    editContact(newContact);
    setIsInEdit(!isInEdit);
  };

  return (
    <li>
      {contact.name}
      {" ☎️ "}
      {contact.number}{" "}
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
      {!isInEdit ? (
        <button onClick={() => setIsInEdit(!isInEdit)}>Update</button>
      ) : (
        <>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Family">Family</option>
            <option value="Friends">Friends</option>
            <option value="Colleagues">Colleagues</option>
          </select>
          <button onClick={handleButtonSave}>Save</button>
          <button onClick={() => setIsInEdit(!isInEdit)}>Cancel</button>
        </>
      )}
    </li>
  );
}

export default ContactItem;
