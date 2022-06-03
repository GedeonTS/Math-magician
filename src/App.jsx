import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import Quote from "./components/Quote";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Quote" element={<Quote />} />
          <Route path="Calculator" element={<Calculator />} />
        </Routes>
      </>
    );
  }
}

export default App;
