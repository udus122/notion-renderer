/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";

import blocks from "./dist/components/Blocks/BlockList.json";

import { BlockList } from "./dist/components/Blocks/BlockList";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BlockList blocks={blocks} />
  </React.StrictMode>
);
