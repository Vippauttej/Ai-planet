import React from "react";

import "./App.css";
import Home from "./Componets/Home/Home";
import Form from "./Componets/form/Form";
import Submission from "./Componets/Submission";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/form" element={<Form />} />
            <Route path="/Submission" element={<Submission />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
