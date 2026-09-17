import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<About />} />
      <Route path="/servicios" element={<Services />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App