import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./roots/Nav";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";
import Support from "./pages/Support";
import Footer from "./components/home/Footer";
import Float from "./components/home/Float";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </main>
        <Float />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
