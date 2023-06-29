import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/homepage";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
