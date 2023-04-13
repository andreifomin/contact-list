import React from "react";
import MenuItem from "./MenuItem";

function Menu(props) {
  const { menu } = props;

  return (
    <div>
      {/*{menu.map((elem, i) => (*/}
      {/*  <li key={i}>{elem}</li>*/}
      {/*))}*/}

      <hr />
      {menu.map((elem, i) => (
        <MenuItem key={i} menuItem={elem} />
      ))}
      <hr />
      
    </div>
  );
}

export default Menu;
