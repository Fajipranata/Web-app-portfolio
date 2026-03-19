import "../styles/adminupload.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function AdminUpload({ projectData, onClose }) {

  const API_URL = import.meta.env.VITE_API_URL;

  const [status, setStatus] = useState("");
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    tech: "",
    details: "",
    github: "",
    demo: ""
  });

  // Fill form when editing
  useEffect(() => {
    if (projectData) {
      setProject({
        title: projectData.title || "",
        description: projectData.description || "",
        tech: projectData.tech || "",
        details: projectData.detail || "",
        github: projectData.github || "",
        demo: projectData.demo || ""
      });
    }
  }, [projectData]);

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previewUrls = files.map(file =>
      URL.createObjectURL(file)
    );

    setPreview(previewUrls);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("Uploading..."); // ⏳ start loading

  const isEditing = projectData?.id;

  const url = isEditing
    ? `${API_URL}/api/projects/${projectData.id}`
    : `${API_URL}/api/projects`;

  const method = isEditing ? "PUT" : "POST";

  const formData = new FormData();

  formData.append("title", project.title);
  formData.append("description", project.description);
  formData.append("tech", project.tech);
  formData.append("detail", project.details);
  formData.append("github", project.github);
  formData.append("demo", project.demo);

  images.forEach((img) => {
    formData.append("images", img);
  });

  try {
    const res = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: formData
    });

    if (!res.ok) {
      throw new Error("Upload failed");
    }

    setStatus("✅ Project uploaded successfully!");

    setTimeout(() => {
      navigate("/projects"); // redirect
    }, 1000);

  } catch (error) {
    console.error(error);
    setStatus("❌ Upload failed");
  }
};

  return (
    <div className="upload-page">
      <h1>{projectData ? "Edit Project" : "Add New Project"}</h1>
      <form className="upload-container" onSubmit={handleSubmit}>
        {/* IMAGE UPLOAD */}
        <div className="image-upload">
          <label className="upload-box">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
            <p>Drag images or click to upload</p>
          </label>

          <div className="preview-grid">
            {preview.map((img, index) => (
              <img key={index} src={img} />
            ))}
          </div>
        </div>

        {/* TEXT INPUTS */}

        <div className="form-section">

          <input
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={handleChange}
            className="title-input"
          />

          <textarea
            name="description"
            placeholder="Short Description"
            value={project.description}
            onChange={handleChange}
          />

          <input
            name="tech"
            placeholder="Tech Stack"
            value={project.tech}
            onChange={handleChange}
          />

          <textarea
            name="details"
            placeholder="Project Details"
            value={project.details}
            onChange={handleChange}
            className="details-box"
          />

          <input
            name="github"
            placeholder="Github URL"
            value={project.github}
            onChange={handleChange}
          />

          <input
            name="demo"
            placeholder="Demo URL"
            value={project.demo}
            onChange={handleChange}
          />

        </div>

        <button className="publish-btn">
          {projectData ? "Update Project" : "Publish Project"}
        </button>
          {status && <p className="upload-status">{status}</p>}
      </form>

    </div>
  );
}

export default AdminUpload;