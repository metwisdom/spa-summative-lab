import { useState } from "react";
import "./App.css";
import AddProject from "./components/AddProject.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects((currentProjects) => [
      ...currentProjects,
      { id: Date.now(), ...newProject },
    ]);
  }

  const filteredProjects = projects.filter((project) =>
    `${project.title} ${project.description}`
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

  return (
    <main className="page-layout">
      <header className="page-header">
        <h1>Personal Project Showcase App</h1>
      </header>

      <section className="add-project">
        <h2>Add Project</h2>

        <AddProject onAddProject={addProject} />
      </section>

      <section className="project-list" id="projects">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="project-items">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="empty-message">
              {projects.length === 0
                ? "No projects yet. Add one above."
                : "No projects match your search."}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;