import React from "react";

function MenuItem(props) {
  const { menuItem } = props;

  return (
    <div>
      <li>{menuItem}</li>
    </div>
  );
}

export default MenuItem;
