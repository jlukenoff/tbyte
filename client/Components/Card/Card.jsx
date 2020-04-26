/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Card = ({
  name = "",
  tasks = [],
  headerBgColor = "#ccc",
  leftNeighbor = "",
  rightNeighbor = "",
  handleNewTask,
  handleTaskShift,
  handleTaskDragStart,
  displayDroppableTask,
  handleTaskDrop,
  handleTaskDragEnd,
}) => {
  return (
    <div
      css={css`
        flex-grow: 1;
        margin: 0 12.5px;

        :first-of-type {
          margin-left: 25px;
        }

        :last-of-type {
          margin-right: 25px;
        }
      `}
    >
      <div
        css={css`
          background-color: ${headerBgColor};
          color: #fff;
          padding: 5px;
        `}
      >
        <h6>{name}</h6>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li
            css={css`
              list-style: none;
            `}
            key={task}
            draggable
            onDragStart={(e) => handleTaskDragStart(e, i, name)}
            onDragEnd={(e) => handleTaskDragEnd(e)}
          >
            {/* leftNeighbor && (
              <button
                type="button"
                onClick={() => handleTaskShift(i, name, leftNeighbor)}
              >
                {"<"}
              </button>
            ) */}
            {task}
            {/* rightNeighbor && (
              <button
                type="button"
                onClick={() => handleTaskShift(i, name, rightNeighbor)}
              >
                {">"}
              </button>
            ) */}
          </li>
        ))}
        {displayDroppableTask && (
          <li
            css={css`
              display: block;
              width: 100%;
              height: 50px;
              background-color: #ccc;
            `}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDrop={(e) => handleTaskDrop(e, name)}
          >
            Drop here
          </li>
        )}
      </ul>
      <button
        type="button"
        onClick={() => {
          const userInput = window.prompt("Enter card content");

          handleNewTask(userInput, name);
        }}
      >
        Add a task
      </button>
    </div>
  );
};

export default Card;
