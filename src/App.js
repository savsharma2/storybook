import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Switch as SW } from "@material-ui/core";
import logo from "./logo.svg";
import { createStore, Provider, ACTION_INCREMENT } from "./redux";

import "./App.css";

const A = React.lazy(() => import(/* webpackChunkName: "a" */ "./pages/a"));
const B = React.lazy(() => import(/* webpackChunkName: "b" */ "./pages/b"));
const Grid = React.lazy(() =>
  import(/* webpackChunkName: "grid" */ "./pages/grid")
);


const rootReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION_INCREMENT:
      return { counter: state.counter + 1 };

    default:
      return state;
  }
};

let store = createStore(rootReducer, { counter: 1 });

function App() {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = () => {
    setState(!state);
  };

  useEffect(() => {});

  return (
    <div className="App">
      <Provider store={store}>
        <div className="switch">
          <SW
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Suspense fallback={<div>Loading</div>}>
            <Router>
              <Link className="App-link" to="/A">
                A
              </Link>
              <Link className="App-link" to="/B">
                B
              </Link>
              <Switch>
                <Route path="/A">
                  <A />
                </Route>
                <Route path="/B">
                  <B />
                </Route>
                <Route path="/grid">
                  <Grid />
                </Route>
              </Switch>
            </Router>
          </Suspense>
        </header>
      </Provider>
    </div>
  );
}

export default App;
