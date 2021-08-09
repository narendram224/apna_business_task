import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import HomeDetail from "./Page/HomeDetail";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/detail/:id" component={HomeDetail} />
          <Route path="**" exact component={HomePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
