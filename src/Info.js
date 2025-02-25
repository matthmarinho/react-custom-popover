import React, { useRef } from "react";

export const Info = ({ item, setElement, setItem }) => {
  const ref = useRef();

  const handleToggle = () => {
    setElement(ref.current);
    setItem(item);
  };

  return (
    <div className="picker">
      <div
        ref={ref}
        className="swatch"
        onMouseEnter={() => handleToggle("enter")}
        onMouseLeave={() => setElement(null)}
      >
        <p>i</p>
      </div>
    </div>
  );
};
