import React, { useState } from "react";
import { Info } from "./Info";
import { Popover } from "./Popover";

export const App = () => {
  const [element, setElement] = useState(null);
  const [item, setItem] = useState(null);
  const beers = [
    { key: "1", name: "Heineken" },
    { key: "2", name: "Budweiser" },
    { key: "3", name: "Corona" },
    { key: "4", name: "Stella Artois" },
    { key: "5", name: "Guinness" },
    { key: "6", name: "Paulaner" },
    { key: "7", name: "Beck’s" },
    { key: "8", name: "Hoegaarden" },
    { key: "9", name: "Eisenbahn" },
    { key: "10", name: "Patagonia" },
  ];
  return (
    <>
      <div className="container">
        <div>
          <Popover element={element} item={item} />
          <div className="overflowContainer">
            {beers.map((item, key) => (
              <div key={key} className="card">
                <Info setElement={setElement} item={item} setItem={setItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
