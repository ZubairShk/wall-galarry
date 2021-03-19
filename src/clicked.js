import React from "react";

function Clicked({ selected, setSelected }) {
  return (
    <div
      className="Clickedimg"
      onClick={() => {
        setSelected(null);
      }}
    >
      <img src={selected} alt="" />
    </div>
  );
}

export default Clicked;
