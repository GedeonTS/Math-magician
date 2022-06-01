import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import Quote from "./components/Quote";


class App extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Quote" element={<Quote />} />
          <Route path="Calculator" element={<Calculator />} />
        </Routes>
    );
  }
}

export default App;
