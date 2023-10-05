import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>
    <header>
    <nav>
      <h1>jobrouter</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="About" >About</NavLink>
    </nav>
    </header>
    <main>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}
export default App;
