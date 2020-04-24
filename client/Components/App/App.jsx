/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";

const App = (props) => {
  const [input, setInput] = useState("");
  return (
    <div
      css={css`
        display: block;
        width: 400px;
        min-height: 400px;
        border: 1px dashed red;
      `}
    >
      <h1>App Here</h1>
      <form>
        <label htmlFor="firstInput">Enter thing:</label>
        <input
          type="text"
          id="firstInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default App;
