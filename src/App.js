import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header.js";
// import Menu from "./components/Menu.js";
import MenuRouter from "./components/MenuRouter.js";
import Router from "./router/Router.js";
import { useState } from "react";
// import Header2 from "./components/Header2";
// import Header3 from "./components/Header3";

function App() {
  // Header
  const contactListName = "Contact list";
  const userName = "Alice";

  // // Menu
  // const menu = ["All", "Family", "Friends", "Colleagues"];

  // ContactItem
  const contactsDefault = [
    {
      id: uuidv4(),
      name: "Sarah Hamonski",
      number: "(641) 403-8509",
      category: "Family",
    },
    {
      id: uuidv4(),
      name: "Bill Ballcuort",
      number: "(641) 403-8509",
      category: "Friends",
    },
    {
      id: uuidv4(),
      name: "Mahombi Parlasscle",
      number: "(641) 403-8509",
      category: "Colleagues",
    },
  ];

  const [contacts, setContacts] = useState(contactsDefault);

  const addContact = (contactNew) => {
    setContacts([...contacts, { ...contactNew, id: uuidv4() }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((elem) => elem.id !== id));
  };

  const editContact = (contact) => {
    const newContacts = contacts.map((elem) => (elem.id === contact.id) ? contact : elem);
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <Header contactListName={contactListName} userName={userName} />
      <hr />
      {/*<Header2 contactListName={contactListName} userName={userName} />*/}
      {/*<Header3 contactListName={contactListName} userName={userName} />*/}

      {/*<Menu menu={menu} />*/}
      <MenuRouter />
      <hr />

      <Router contacts={contacts} addContact={addContact} deleteContact={deleteContact} editContact={editContact} />
    </div>
  );
}

export default App;
