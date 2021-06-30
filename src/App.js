import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import MainPageContainer from "./containers/MainPageContainer";
import OtherPageContainer from "./containers/OtherPageContainer";

function App() {
  return (
    <div className="App">
      <Route path="/" component={MainPageContainer} exact />
      <Route path="/other" component={OtherPageContainer} exact />
    </div>
  );
}

export default App;
