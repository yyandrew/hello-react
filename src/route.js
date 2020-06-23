import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import FormContainer from "./form/FormContainer";
import FormComponent from "./form/FormComponent";

import Todo from "./todo/todo";
import Item from "./item/item";
import Hook from "./hook/hook";
import About from "./about/about";
import LoadingData from "./hook/LoadingData";

// Form is high order component(HOC) wrapper function
const Form = FormContainer(FormComponent);

const AppRouter = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" render={() => <App name="Andrew" />} />
        <Route path="/about" component={About} />
        <Route path="/form" component={Form} />
        <Route path="/todo" component={Todo} />
        <Route path="/item" component={Item} />
        <Route path="/hook" component={Hook} />
        <Route path="/loading_data" component={LoadingData} />
      </div>
    </Router>
  </div>
);

export default AppRouter;
