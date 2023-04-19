import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import twitterIcon from "@assets/twitter.svg";
import Page1 from "@components/routes/Page1";
import Page2 from "./components/Routes/Page2";

const App: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>Webpack + TypeScript + React + SASS + Bootstrap = ❤️</p>

          <hr />

          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/Page1">Page1 - Env</Link>
                </li>
                <li>
                  <Link to="/Page2">Page2 - Counter</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/Page1" element={<Page1 />} />
              <Route path="/Page2" element={<Page2 />} />
            </Routes>
          </Router>

          <hr />

          <a
            className="twitter-btn btn btn-sm"
            href="https://twitter.com/intent/tweet?text=@esperancaJs+halp"
          >
            <img className="img-fluid" src={twitterIcon} />
            Any questions?
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
