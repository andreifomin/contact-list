import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateNewContact(props) {
  const { addContact } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");

  const handleButtonAddContact = () => {
    const contactNew = {
      name,
      number: phone,
      category,
    };
    addContact(contactNew);
    setName("");
    setPhone("");
    setCategory("");
  };

  return (
    <div>
      <h2>Create new contact</h2>

      {/*Set name*/}
      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />

      {/*Set phone number*/}
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <br />

      {/*Select tag - set category*/}
      <label>Choose category:</label>

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="Family">Family</option>
        <option value="Friends">Friends</option>
        <option value="Colleagues">Colleagues</option>
      </select>
      <br />

      {/*Button add contact*/}
      <button onClick={() => handleButtonAddContact()}>Add contact</button>
    </div>
  );
}

export default CreateNewContact;
