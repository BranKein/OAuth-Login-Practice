import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import MainPageContainer from "./containers/MainPageContainer";

function App() {
  return (
    <div className="App">
      <Route path="/" component={MainPageContainer} exact />
    </div>
  );
}

export default App;
