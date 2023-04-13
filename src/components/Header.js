import React from "react";

function Header(props) {
  return (
    <div>
      <h1>{props.contactListName}</h1>
      <p>Hello, {props.userName}!</p>
    </div>
  );
}

export default Header;