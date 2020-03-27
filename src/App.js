import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import Form  from "./Form"


function App() {
  return (
    <div className="App">
      <h1>Lambda Eats</h1>

      <Switch>
        <Route exact path ="/">
          <Link to={'/pizza'}>Click Here To Make Pizza</Link>
        </Route>

        <Route path="/pizza">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
