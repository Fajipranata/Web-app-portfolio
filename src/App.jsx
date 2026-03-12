import { Routes, Route } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Mystory from "./pages/Mystory"
import AdminUpload from "./pages/AdminUpload";
import "./App.css"

const verticalRoutes = ["/", "/home"];
const horizontalRoutes = ["/projects", "/about", "/mystory"];

const allRoutes = [
  ...verticalRoutes,
  ...horizontalRoutes,
  "/login"
];

const pageVariants = {
  initial: ({ axis, direction }) => ({
    [axis]: direction === 1 ? "100%" : "-100%",
    opacity: 0
  }),
  animate: {
    x: 0,
    y: 0,
    opacity: 1
  },
  exit: ({ axis, direction }) => ({
    [axis]: direction === 1 ? "-100%" : "100%",
    opacity: 0
  })
};

function App() {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const prevPath = prevPathRef.current;

  let axis = "y";
  let direction = 1;

  // 1️⃣ ALWAYS override when going to landing
  if (location.pathname === "/") {
    axis = "y";
    direction = -1; // everything moves down
  }

  // 2️⃣ Vertical only between landing and home
  else if (
    (prevPath === "/" && location.pathname === "/home") ||
    (prevPath === "/home" && location.pathname === "/")
  ) {
    axis = "y";
    direction = location.pathname === "/home" ? 1 : -1;
  }

  // 3️⃣ Horizontal for everything else except landing
  else if (location.pathname !== "/" && prevPath !== "/") {
    axis = "x";

    const prevIndex = horizontalRoutes.indexOf(prevPath);
    const currentIndex = horizontalRoutes.indexOf(location.pathname);

    if (prevIndex !== -1 && currentIndex !== -1) {
      direction = currentIndex >= prevIndex ? 1 : -1;
    } else {
      direction = 1;
    }
  }

  prevPathRef.current = location.pathname;

  return (
    <div className="app-wrapper">
      <Navbar />

      <div className="page-container">
          <AnimatePresence mode="wait" custom={{ axis, direction }}>
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={{ axis, direction }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ height: "100%", overflowY: "auto" }}
            >
            <Routes location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/mystory" element={<Mystory />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminUpload />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App
