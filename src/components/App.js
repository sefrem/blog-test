import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Dashboard from "./Dashboard/Dashboard"
import Modal from "./Modal/Modal"
import "../styles/normalize.css";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Dashboard />
      <Modal />
    </div>
  );
};

export default App;
