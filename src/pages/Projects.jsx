const projects = [
  {
    id: 1,
    title: "FastAPI Notes App",
    description: "Secure notes application with JWT authentication and Docker.",
    tech: "FastAPI, PostgreSQL, Docker"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and FastAPI backend.",
    tech: "React, Vite, FastAPI"
  }
]
  
function Projects() {
  return (
    <div style={{ padding: "80px" }}>
      <h1>My Projects</h1>

      <div style={{ marginTop: "40px", display: "grid", gap: "20px" }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              padding: "20px",
              border: "0px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "grey"
            }}
          >
            <h2>{project.title}</h2>
            <p style={{ margin: "10px 0" }}>{project.description}</p>
            <small><strong>Tech:</strong> {project.tech}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
