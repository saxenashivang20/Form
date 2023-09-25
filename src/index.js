import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Kyc1 from "./components/Kyc1/Kyc1"; // Import Kyc1 as the default page
import Kyc2 from "./components/Kyc2/Kyc2";
import Kyc3 from "./components/Kyc3/Kyc3";

ReactDOM.render(
  <Router>
    {/* Define your routes */}
    <Route path="/kyc2" component={Kyc2} />
    <Route path="/kyc3" component={Kyc3} />
    <Route path="/kyc1" component={Kyc1} /> {/* This route will match the root path */}
  </Router>,
  document.getElementById("root")
);
