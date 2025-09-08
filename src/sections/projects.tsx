const GITHUB_URL = "https://github.com/WT-Dougherty";

interface Project {
  title: string;
  description: string;
  skills: string[];
  repo_path: string;
  doc_path: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Slice Social",
      description: `Slice Social is a social media platform designed to better supplement
            real-life social engagement. Slice aims to connect users with their immediate
            social circles, rather than with a collective global community.
            I'm prioritizing a seamless user experience and a low-cost backend, with the
            goal of creating a comfortable, ad-free environment. With Slice, you gain the benefits
            of online connectivity that traditional social media platforms offer without having to
            expose yourself to the harmful features designed to keep you hyper-engaged.`,
      skills: [
        "Typescript",
        "React Native",
        "Node.js",
        "FastAPI",
        "Postgres",
        "Docker",
      ],
      repo_path: "/SliceSocial-Frontend",
      doc_path:
        "/SliceSocial-Frontend/blob/f1e195d60b7fc1811891b23432176f370610d638/README.md",
    },
    {
      title: "Scrum Master Agent",
      description: `The Scrum Master Agent is an agentic assistant designed to aid developers
            in their software projects via the enforcement of scrum principles. It integrates with Zep
            for long-term memory and user profiling, ensuring that planning and sprint guidance remain
            contextual and personalized over time. The agent keeps track of how long it's been since previous
            sessions using a time tool and tracks your progress. The agent itself is implemented using OpenAI's
            Agent SDK and powered by the gpt-4o-mini model.`,
      skills: ["Typescript", "Scrum"],
      repo_path: "/ScrumMasterAgent",
      doc_path:
        "https://github.com/WT-Dougherty/ScrumMasterAgent/blob/249fb8763cde14c1ed2e4601e0a46913929d5058/README.md",
    },
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
                  {project.skills.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={GITHUB_URL + project.doc_path}
                    target="_blank"
                    className="btn"
                  >
                    Documentation
                  </a>
                  {/* <a href={GITHUB_URL+project.repo_path} className="btn">Documentation</a> */}
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
