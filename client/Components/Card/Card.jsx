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
          >
            {leftNeighbor && (
              <button
                type="button"
                onClick={() => handleTaskShift(i, name, leftNeighbor)}
              >
                {"<"}
              </button>
            )}
            {task}
            {rightNeighbor && (
              <button
                type="button"
                onClick={() => handleTaskShift(i, name, rightNeighbor)}
              >
                {">"}
              </button>
            )}
          </li>
        ))}
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
