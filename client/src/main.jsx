import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import './index.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      desiredChainId={ChainId.Goerli}
    >
        <App />
    </ThirdwebProvider>
  </React.StrictMode>
);