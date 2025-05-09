import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import React from "react";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
