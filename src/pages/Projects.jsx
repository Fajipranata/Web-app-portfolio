import { useEffect, useState } from "react"
import "../styles/projects.css"
import AdminUpload from "./AdminUpload";

function Projects() {

  const API_URL = import.meta.env.VITE_API_URL

  const [editingProject, setEditingProject] = useState(null)
  const [projects, setProjects] = useState([])

  const fetchProjects = () => {
    fetch(`${API_URL}/api/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err))
  }

  useEffect(()=>{
    fetchProjects()
  },[])

  const handleEdit = (project) => {
    setEditingProject(project)
  }

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm("Delete this project?")
    if (!confirmDelete) return

    try {
      await fetch(`${API_URL}/api/projects/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setProjects(prev =>
        prev.filter(project => project.id !== id)
      )
    } catch (error) {
      console.error("Delete failed:", error)
    }
  }

  return (
    <div className="projects-container">

      <h1>My Projects</h1>

      {projects.map((project) => (
        <div className="project-card" key={project.id}>

          {project.image && (
            <img
              src={`${API_URL}/${project.image}`}
              alt={project.title}
            />
          )}

          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.tech}</p>
          </div>

          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
          </div>

          <button onClick={() => handleEdit(project)}>
            Edit
          </button>

          <button onClick={() => handleDelete(project.id)}>
            Delete
          </button>

        </div>
      ))}

      {editingProject && (
        <AdminUpload
          projectData={editingProject}
          onClose={() => {
            setEditingProject(null)
            fetchProjects()
          }}
        />
      )}

    </div>
  )
}

export default Projects