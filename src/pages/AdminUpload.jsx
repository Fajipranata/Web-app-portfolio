import "../styles/adminupload.css"
import { useState } from "react";

function AdminUpload() {

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);

  const [project, setProject] = useState({
    title: "",
    description: "",
    tech: "",
    details: "",
    github: "",
    demo: ""
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(project);
    console.log(images);

    alert("Project uploaded!");
  };

  return (
    <div className="upload-page">

      <h1>Add New Project</h1>

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
            onChange={handleChange}
            className="title-input"
          />

          <textarea
            name="description"
            placeholder="Short Description"
            onChange={handleChange}
          />

          <input
            name="tech"
            placeholder="Tech Stack (React, FastAPI...)"
            onChange={handleChange}
          />

          <textarea
            name="details"
            placeholder="Project Details"
            onChange={handleChange}
            className="details-box"
          />

          <input
            name="github"
            placeholder="Github URL"
            onChange={handleChange}
          />

          <input
            name="demo"
            placeholder="Demo URL"
            onChange={handleChange}
          />

        </div>

        <button className="publish-btn">
          Publish Project
        </button>

      </form>

    </div>
  );
}

export default AdminUpload;