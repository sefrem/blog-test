import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Dashboard from "./Dashboard/Dashboard";
import Form from "./Form/Form";
import "./App.css";

const App = () => {
  const showModalForm = useSelector(state => state.modalForm);
  return (
    <div className="app">
      <Header />
      <Hero />
      <Dashboard />
      {showModalForm && <Form />}
    </div>
  );
};

export default App;
