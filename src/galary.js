import React from "react";

function Galary({ pictures, setSelected }) {
  return (
    <div className="container">
      <div className="title">
        <h1>Photo wall</h1>
      </div>
      {pictures.map((picture) => {
        return (
          <div
            className="pic"
            key={picture.id}
            onClick={() => setSelected(picture.urls.small)}
          >
            <img src={picture.urls.small} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Galary;
