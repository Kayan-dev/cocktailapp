import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cocktail from "./Pages/Cocktail";
import Images from "./Pages/Images";
import details from "./Pages/details";
import Drinks from "./Pages/Drinks";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Cocktail}></Route>
        <Route path="/images/:categoryDrink?" component={Images}></Route>
        <Route path="/details/:idDrink?" component={details}></Route>
        <Route path="/drinks/:strDrink?" component={Drinks}></Route>
      </Switch>
    </div>
  );
}

export default App;
