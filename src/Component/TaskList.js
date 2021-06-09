import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
function TaskList({ name, description, id }) {
  const dispatch = useDispatch();
  const [newn, setNewn] = useState(name);
  const [newd, setNewd] = useState(description);
  const [modif, setModif] = useState(false);
  return (
    <div className="tasklist">
      <div className="upbutt">
        {modif ? (
          <input
            type="text"
            value={newn}
            onChange={(e) => setNewn(e.target.value)}
          ></input>
        ) : (
          <h3 onClick={() => dispatch({ type: "isDone", playload: id })}>
            {name}
          </h3>
        )}
        {modif ? (
          <input
            type="text"
            value={newd}
            onChange={(e) => setNewd(e.target.value)}
          ></input>
        ) : (
          <p>{description}</p>
        )}
      </div>
      <div className="allbut">
        <button onClick={() => dispatch({ type: "Delete", playload: id })}>
          Delete
        </button>
        <button
          onClick={() => {
            if (modif) {
              dispatch({
                type: "modif",
                playload: { name: newn, description: newd, id: id },
              });
            }
            setModif(!modif);
          }}
        >
          Modif
        </button>
      </div>
    </div>
  );
}

export default TaskList;
