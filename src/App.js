import React, { Component } from "react";
import bubbleSort from "./algorithms/sorting/BubbleSort";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sorting from "./components/Sorting/Sorting";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MergeSort from "./components/Sorting/MergeSort";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Route path="/" exact component={MergeSort}></Route>
        <Route path="/sorting" component={Sorting}></Route>
      </div>
    );
  }
}
// below bar Numbers
// Sorting Name
// Change Speed
