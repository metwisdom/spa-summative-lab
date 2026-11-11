function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image ? (
        <img
          className="project-image"
          src={project.image}
          alt=""
        />
      ) : (
        <div className="project-placeholder" aria-hidden="true" />
      )}

      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;