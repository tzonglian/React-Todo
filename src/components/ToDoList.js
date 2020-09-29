import React from "react";

const ToDoList = (props) => {
  return (
    <div className="task-list">
      {props.tasks.map((item) => (
        <div
          className={`task${item.done ? "done" : ""}`}
          onClick={() => props.crossTask(item.id)}
        >
          <p>{item.task}</p>
        </div>
      ))}
      <button className="clear-btn" onClick={props.clearDone}>
        Clear Finished
      </button>
    </div>
  );
};

export default ToDoList;
