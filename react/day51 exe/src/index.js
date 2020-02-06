import React from "react";
// import ModalExample from './Modal.js'
import ModalExample from "./ModalExample";
import ReactDOM from "react-dom";

import logo from "./logo.png";

import "bootstrap/dist/css/bootstrap.min.css"; // Add this line
import "./App.css";

import "./index.css";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Jon",

  lastName: "Snow"
};

const element = (
  <body>
    <header>
      <h1>Simple Website</h1>
    </header>
    <section>
      This is a simple website made without React. Try to convert this into
      React enabled.
      <div>
        <ModalExample buttonLabel="Modal Button" />
      </div>
      <ol>
        <li>
          First, you need to use <span class="command">create-react-app</span>
        </li>
        <li>
          Second, you need to run <span class="command">npm start</span>
        </li>
      </ol>
      <a className="btn btn-primary center ">Click me</a>
    </section>
    <footer>
      <img className="center" src={logo} />
    </footer>
  </body>
);

ReactDOM.render(
  element,

  document.getElementById("root")
);
