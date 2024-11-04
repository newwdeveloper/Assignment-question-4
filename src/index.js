import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const parent = React.createElement("div", { id: "container" }, [
  React.createElement("input", {
    type: "text",
    id: "username",
    name: "username",
    placeHolder: "UserName",
    class: "input",
  }),
  React.createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    placeHolder: "Password",
    class: "password",
  }),
  React.createElement("button", { type: "submit", id: "btn" }, "Submit"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{parent}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
