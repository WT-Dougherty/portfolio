const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "#",
            live: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
            github: "#",
            live: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with a clean, responsive design.",
            technologies: ["JavaScript", "HTML5", "CSS3", "REST API"],
            github: "#",
            live: "#"
        }
    ];

    return (
        <section id="projects">
            <div className="projects-content">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} className="btn secondary">GitHub</a>
                                    <a href={project.live} className="btn primary">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;