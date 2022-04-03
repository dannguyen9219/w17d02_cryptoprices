import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // when doing imports, you have to tell it what you're trying to get out of react-router-dom, so we're getting BrowserRouter but we can call it a different name like Router //

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
      <Router>
          <App />
      </Router>
  </StrictMode>,
  rootElement
);
// The code above is JSX. You will put your App in Router in StrictMode
// If you have simple CSS and Hello World text, you can now test if it runs in browser before writing your components
// Run "npm start" to run code