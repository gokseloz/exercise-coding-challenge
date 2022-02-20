import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { server } from "./mocks/server";

if (process.env.NODE_ENV === "development") {
  server.start();
}
console.log(`App runs in ${process.env.NODE_ENV} mode`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
