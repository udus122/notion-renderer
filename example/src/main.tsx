/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";

import blocks from "./sample_block_list.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>Example App</h1>
    <pre>{JSON.stringify(blocks, null, 2)}</pre>
  </React.StrictMode>
);
