import { useState } from "react";

function AddProject({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddProject({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle("");
    setDescription("");
  }

  return (
    <section className="add-project">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="project-title">Title</label>
        <input
          id="project-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddProject;