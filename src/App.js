import React, { Component } from "react";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { createStore } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./routes/Home";
import "./App.css";

class App extends Component {
  render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path={""} exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
