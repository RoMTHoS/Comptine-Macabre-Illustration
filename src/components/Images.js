import React from "react";

const Images = () => {
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="images">
      {index.map((i) => {
        return <img key={i} src={`./oeuvres/${i}.jpg`} alt="" />;
      })}
    </div>
  );
};

export default Images;
