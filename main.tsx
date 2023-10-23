/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";

import blocks from "./dist/components/Blocks/Blocks.json";

import { Blocks } from "./dist/components/Blocks/Blocks";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Blocks blocks={blocks} />
  </React.StrictMode>
);
