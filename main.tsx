/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";

import blocks from "./src/components/Blocks/Blocks.json";

import Blocks from "./src/components/Blocks/Blocks";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Blocks blocks={blocks} />
  </React.StrictMode>
);
