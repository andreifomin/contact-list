import React from "react";
import { Link } from "react-router-dom";

function MenuRouter() {
  const flexBox = {
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    height: "100%",
    margin: "30px",
    justifyContent: "center",
  };

  const flexChild = {
    width: "100px",
  };

  return (
    <div>
      <div style={flexBox}>
        <div style={flexChild}>
          <Link to={"/all_contacts"}>All</Link>
        </div>
        <div style={flexChild}>
          <Link to={"/family"}>Family</Link>
        </div>
        <div style={flexChild}>
          <Link to={"/friends"}>Friends</Link>
        </div>
        <div style={flexChild}>
          <Link to={"/colleagues"}>Colleagues</Link>
        </div>
        <div style={flexChild}>
          <Link to={"/"}>Create new contact</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuRouter;
