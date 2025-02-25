import React, { useRef, useState, useEffect } from "react";

export const Popover = ({ element, item }) => {
  const popover = useRef();
  const [rect, setRect] = useState(null);

  useEffect(() => {
    if (element) {
      setRect(element.getBoundingClientRect());
    } else {
      setRect(null);
    }
  }, [element]);

  return (
    <div className="picker">
      {rect && (
        <div
          className="popover"
          style={{ left: rect.left - 74, top: rect.bottom - 60 }}
          ref={popover}
        >
          <p>{item.name}</p>
        </div>
      )}
    </div>
  );
};
