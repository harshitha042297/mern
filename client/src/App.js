import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/auth" exact element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
export default App;
