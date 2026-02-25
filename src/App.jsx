import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import "./App.css"

const pageVariants = {
  initial: (direction) => ({
    y: direction === 1 ? "100%" : "-100%",
    opacity: 0
  }),
  animate: {
    y: 0,
    opacity: 1
  },
  exit: (direction) => ({
    y: direction === 1 ? "-100%" : "100%",
    opacity: 0
  })
};

function App() {
  const location = useLocation();

  const routesOrder = [
    "/",
    "/home",
    "/projects",
    "/about",
    "/contact",
    "/login"
  ];

  const prevIndexRef = useRef(routesOrder.indexOf(location.pathname));
  const currentIndex = routesOrder.indexOf(location.pathname);

  const direction =
    currentIndex >= prevIndexRef.current ? 1 : -1;

  prevIndexRef.current = currentIndex;

  return (
    <div className="app-wrapper">
      <Navbar />

      <div className="page-container">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ height: "100%" }}
            >
            <Routes location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App
