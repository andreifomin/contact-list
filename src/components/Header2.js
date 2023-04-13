import React from 'react';

function Header2({ contactListName, userName }) {
  return (
    <div>
      <h1>{contactListName}</h1>
      <p>Hello, {userName}!</p>
    </div>
  );
}

export default Header2;