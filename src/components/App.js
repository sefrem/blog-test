import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Dashboard from "./Dashboard/Dashboard";
import Form from "./Form/Form";
import "./App.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    // <BrowserRouter>
    <div className="app">
      <Header />
      <Hero setShowForm={setShowForm} />
      <Dashboard />
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
    // </BrowserRouter>
  );
};

export default App;
