import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="max-w-6xl mx-auto text-3xl ">
    <Header />
    <div className="my-10">This is microfrontend 1</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
