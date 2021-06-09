import React from "react";
import { useState } from "react";
function Add({ dispatch }) {
  const [click, setClick] = useState(false);
  const [newname, setNewname] = useState("");
  const [newdescription, setNewdescription] = useState("");
  return (
    <div className="add">
      <button onClick={() => setClick(!click)}>Add New Task</button>
      {click ? (
        <div className="undadd">
          <input
            type="text"
            placeholder="Anime Name"
            value={newname}
            onChange={(e) => setNewname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Anime Description"
            value={newdescription}
            onChange={(e) => setNewdescription(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch({
                type: "Add",
                playload: { name: newname, description: newdescription },
              });
              setNewname("");
              setNewdescription("");
              setClick(!click);
            }}
          >
            Valid
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Add;
