import React from "react";
import { ValidationSchemaExample } from "./component/ComponentFormikForm";
import HOCFormikForm from "./component/HOCFormikForm";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
      <Route path="/hocForm" component={HOCFormikForm} />
      <Route path="/componentForm" component={ValidationSchemaExample} />
    </div>
  </Router>
);

export default AppRouter;
