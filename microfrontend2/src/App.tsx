import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Header = React.lazy(() => import("microfrontend1/Header"));
const Footer = React.lazy(() => import("microfrontend1/Footer"));
const Calc = React.lazy(() =>
  import("microfrontend1/Header").then((mod) => ({ default: mod.Calc }))
);

import { CalcT } from "microfrontend1/Header";

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-6xl mx-auto text-3xl ">
      {loading && (
        <Suspense fallback={<div>Loading</div>}>
          <Header />
        </Suspense>
      )}
      <button onClick={() => setLoading(!loading)}>
        Click here to dynamically load the Header Component from the Microfrontend 1
      </button>
      <div className="my-10 bg-yellow-500">Microfrontend 2 (Current) Page Content</div>
      <Suspense fallback={<div>Loading</div>}>
        <Footer />
        <div>
          This outcome is calculated with a function from Microfrontend 1: 4 x 2 ={" "}
          <span className="bg-yellow-500">{CalcT(4)}</span>
        </div>
      </Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
