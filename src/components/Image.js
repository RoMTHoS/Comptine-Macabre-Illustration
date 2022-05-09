import React, { useRef, useState } from "react";
import { useGesture, useWheel } from "react-use-gesture";

const Image = ({ src }) => {
  let imageRef = useRef();
  let [crop, setCrop] = useState({ x: 0, y: 0, scale: 0.3 });
  useGesture(
    {
      onDrag: ({ offset: [dx, dy] }) => {
        setCrop((crop) => ({ ...crop, x: dx, y: dy }));
        console.log({ offset: [dx, dy] });
      },

      onPinch: ({ offset: [d] }) => {
        setCrop((crop) => ({ ...crop, scale: 1 + d / 1000 }));
      },
    },
    {
      domTarget: imageRef,
      eventOptions: { passive: false },
    }
  );

  const wheel = useWheel(({ offset: Array }) => {
    setCrop((crop) => ({ ...crop, scale: 0.3 + Array[1] / 1000 }));
  });

  function onLoad() {
    setCrop({ x: 0, y: 0, scale: 0.3 });
  }

  return (
    <div className="image" {...wheel()}>
      <img
        onLoad={onLoad}
        draggable="false"
        ref={imageRef}
        src={src}
        style={{
          left: crop.x,
          top: crop.y,
          transform: `scale(${crop.scale})`,
          touchAction: "none",
        }}
        alt=""
      />
    </div>
  );
};

export default Image;
