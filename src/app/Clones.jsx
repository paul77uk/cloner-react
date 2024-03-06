"use client";

import { useState } from "react/";
import victorImg from "../../public/victor.png";

const Clones = () => {
  const victor = {
    name: "Victor",
    id: 1,
    img: victorImg,
  };

  const [clones, setClones] = useState([victor]);

  const addClone = () => {
    const newClone = {
      name: "Victor",
      id: clones.length + 1,
      img: victorImg,
    };
    setClones([...clones, newClone]);
  };

  const removeClone = (e) => {
    const newClones = clones.filter((clone) => clone.id !== +e.target.value);
    console.log(newClones);
    setClones(newClones);
  };

  return (
    <div>
      <div id="clones">
        {clones.map((clone) => {
          return (
            <div className="clone" key={clone.id}>
              <h2>{clone.name}</h2>
              <p>ID: {clone.id}</p>
              <img src={clone.img.src} alt={clone.name} />
              <button onClick={addClone}>Clone!</button>
            </div>
          );
        })}
      </div>
      <h2>
        Use the filter method and a select box to remove the clones that didn't
        turn out right.
      </h2>
      <p>
        SELECT CLONE TO TERMINATE:{" "}
        <select onChange={removeClone}>
          {clones.map((clone) => (
            <option key={clone.id} value={clone.id}>{clone.id}</option>
          ))}
        </select>
      </p>
    </div>
  );
};
export default Clones;
