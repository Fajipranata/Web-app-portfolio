function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI Portfolio Assistant",
      description: "Personal AI chatbot powered by Ollama and Phi3 running locally.",
      image: "/ai-project.jpg",
    },
    {
      id: 2,
      title: "Fullstack Task Manager",
      description: "React + Node.js + MongoDB task management system.",
      image: "/task-project.jpg",
    },
    {
      id: 3,
      title: "AI Portfolio Assistant",
      description: "Personal AI chatbot powered by Ollama and Phi3 running locally.",
      image: "/ai-project.jpg",
    },
    {
      id: 4,
      title: "Fullstack Task Manager",
      description: "React + Node.js + MongoDB task management system.",
      image: "/task-project.jpg",
    },
        {
      id: 5,
      title: "AI Portfolio Assistant",
      description: "Personal AI chatbot powered by Ollama and Phi3 running locally.",
      image: "/ai-project.jpg",
    },
    {
      id: 6,
      title: "Fullstack Task Manager",
      description: "React + Node.js + MongoDB task management system.",
      image: "/task-project.jpg",
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} loading= "lazy" />

          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;