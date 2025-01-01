import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import News from "./components/Home/News";
import Contact from "./components/Home/Contact";
import Event from './components/Home/EventsAchievements';
import Gallery from './components/Home/Gallery';
import Admission from './components/Home/Admission';
import Academic from './components/Home/Academic';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure full height */}
      <Router>
      <ScrollToTop />
        <Navbar />
        <main className="flex-grow"> {/* Content pushes footer down */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/event" element={<Event />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/academic" element={<Academic />} />
            {/* You can add more routes here */}
          </Routes>
        </main>
        <Footer /> {/* Footer always at the bottom */}
      </Router>
    </div>
  );
};

export default App;
