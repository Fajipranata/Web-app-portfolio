import "../styles/projects.css"
import { useState } from "react";
import { motion } from "framer-motion";
import cloud2 from "../assets/cloudwhite.svg";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
    id: 1,
    title: "Web App Portfolio",
    description: "This web app portfolio is my first ever frontend project. This web app show all about me projects in interactive way.",
    tech: "React, Node.js, Ollama",
    details: "A full-stack portfolio website with a built-in AI assistant that answers questions about me, my background, and my projects. The application integrates a React frontend with a FastAPI backend and a locally hosted AI model using Ollama.",
    images: [
      "./src/assets/japan1.webp",
      "./src/assets/covid2.webp"
    ],
    github: "https://github.com/Fajipranata/FastAPI-portfolio-app",
    demo: "https://demo.com"
  },
    {
    id: 2,
    title: "Note App",
    description: "This web app portfolio is my first ever frontend project. This web app show all about me projects in interactive way.",
    tech: "React, Node.js, Ollama",
    details: "A full-stack portfolio website with a built-in AI assistant that answers questions about me, my background, and my projects. The application integrates a React frontend with a FastAPI backend and a locally hosted AI model using Ollama.",
    images: [
      "./src/assets/diploma1.webp",
      "./src/assets/covid1.webp"
    ],
    github: "https://github.com/Fajipranata/FastAPI-portfolio-app",
    demo: "https://demo.com"
  },
    {
    id: 3,
    title: "Travel Quota",
    description: "This web app portfolio is my first ever frontend project. This web app show all about me projects in interactive way.",
    tech: "React, Node.js, Ollama",
    details: "A full-stack portfolio website with a built-in AI assistant that answers questions about me, my background, and my projects. The application integrates a React frontend with a FastAPI backend and a locally hosted AI model using Ollama.",
    images: [
      "./src/assets/kobe1.webp",
      "./src/assets/childhood.webp"
    ],
    github: "https://github.com/Fajipranata/FastAPI-portfolio-app",
    demo: "https://demo.com"
  },
    {
    id: 4,
    title: "AWP Simulator",
    description: "This web app portfolio is my first ever frontend project. This web app show all about me projects in interactive way.",
    tech: "React, Node.js, Ollama",
    details: "A full-stack portfolio website with a built-in AI assistant that answers questions about me, my background, and my projects. The application integrates a React frontend with a FastAPI backend and a locally hosted AI model using Ollama.",
    images: [
      "./src/assets/master1.webp",
      "./src/assets/diploma2.webp"
    ],
    github: "https://github.com/Fajipranata/FastAPI-portfolio-app",
    demo: "https://demo.com"
  },
  
  ];

return (
  
  <div className="projects-container">

    <h1>My Projects</h1>

    {projects.map((project) => (
      <div
        key={project.id}
        className="project-card"
        onClick={() => {setSelectedProject(project);setCurrentImage(0);          
        }}
      >
        
      <img
        src={project.images?.[0]}
        alt={project.title}
      />

      <div className="project-info">
        <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.tech}</p>
        </div>
      </div>
    ))}

    {/* Modal */}
    {selectedProject && (
      <div className="project-modal"
       onClick={() => setSelectedProject(null)}
      >
        <div className="modal-content"
        onClick={(e) => e.stopPropagation()}
        >

      <button
        className="close-btn"
        onClick={() => setSelectedProject(null)}
      >
        ✕
      </button>

      <div className="slideshow">

        <button
          className="slide-btn"
          onClick={() =>
            setCurrentImage(
              (currentImage - 1 + selectedProject.images.length) %
              selectedProject.images.length
            )
          }
        >
          ◀
        </button>

        <img
          src={selectedProject.images?.[currentImage]}
          alt={selectedProject.title}
        />

        <button
          className="slide-btn"
          onClick={() =>
            setCurrentImage(
              (currentImage + 1) %
              selectedProject.images.length
            )
          }
        >
          ▶
        </button>

      </div>

      <h2>{selectedProject.title}</h2>

      <p>{selectedProject.description}</p>

      <p className="project-tech">
        <strong>Tech:</strong> {selectedProject.tech}
      </p>

      <p className="project-details">
        {selectedProject.details}
      </p>

      <div className="modal-buttons">
        <a
          href={selectedProject.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-btn"
        >
         Demo
        </a>

        <a
          href={selectedProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-btn"
        >
          GitHub
        </a>
      </div>
      </div>
    </div>
    )}

  </div>
);
}

export default Projects;