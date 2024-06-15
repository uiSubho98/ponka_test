import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./roots/Nav";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </Router>
  );
}

export default App;
