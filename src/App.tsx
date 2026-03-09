import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Navbar from "./Components/NavBarTemplate";
import NotFound from "./Pages/NotFound";


function App() {

  return (
    
    <BrowserRouter>

    <Navbar />
  
      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>} />

        <Route path="/contact" element={<Contact/>} />

        <Route path="/service" element={<Service/>} />

        <Route path="*" element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App