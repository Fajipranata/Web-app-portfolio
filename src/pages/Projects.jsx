import { useEffect, useState } from "react"
import "../styles/projects.css"
import AdminUpload from "./AdminUpload";
import LogoutButton from "../components/LogoutButton"

function Projects() {

  const API_URL = import.meta.env.VITE_API_URL

  const [selectedProject, setSelectedProject] = useState(null)
  const [editingProject, setEditingProject] = useState(null)
  const [projects, setProjects] = useState([])
  const [imageIndex, setImageIndex] = useState(0)

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
  if (!id) return
  const confirmDelete = window.confirm("Delete this project?")
  if (!confirmDelete) return
  try {
    await fetch(`${API_URL}/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    setProjects(prev =>
      prev.filter(project => project.id !== id)
    )
    setSelectedProject(null)
  } catch (error) {
    console.error("Delete failed:", error)
  }
}

  return (
    <div className="projects-container">

      <h1>My Projects</h1>

        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => {
              setSelectedProject(project)
              setImageIndex(0)
            }}
          >
            {project.images && (
              <img
                src={`${API_URL}/${project.images?.[0]}`}
                alt={project.title}
              />
            )}

            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tech">{project.tech}</div>
            </div>

            {localStorage.getItem("token") && (
              <div className="Edit-delete-button">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setEditingProject(project)
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDelete(project.id)
                  }}
                >
                  Delete
                </button>
              </div>
            )}            

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

      {selectedProject && (

        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <div className="image-slider">
              <button
                className="slider-btn"
                onClick={() =>
                  setImageIndex((prev) =>
                    prev === 0
                      ? (selectedProject?.images?.length || 1) - 1
                      : prev - 1
                  )
                }
              >
                ◀
              </button>

              <img
                src={`${API_URL}/${
                  selectedProject.images?.[imageIndex] || selectedProject?.image
                }`}
                alt={selectedProject?.title}
              />

              <button
                className="slider-btn"
                onClick={() =>
                  setImageIndex((prev) =>
                    prev === (selectedProject?.images?.length || 1) - 1
                      ? 0
                      : prev + 1
                  )
                }
              >
                ▶
              </button>
            </div>

            <h2>{selectedProject.title}</h2>

            <p>{selectedProject.description}</p>

            <h3>Tech Stack</h3>
            <p>{selectedProject.tech}</p>

            <h3>Project Details</h3>
            <p>{selectedProject.detail}</p>

            <div className="project-links">
              <a href={selectedProject.github} target="_blank">Github</a>
              <a href={selectedProject.demo} target="_blank">Live Demo</a>
            </div>

          </div>

        </div>
      )}

        {localStorage.getItem("token") && (
          <LogoutButton />
        )}

    </div>
  )
}

export default Projects