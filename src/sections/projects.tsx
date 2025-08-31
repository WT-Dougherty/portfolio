const GITHUB_URL = 'https://github.com/WT-Dougherty';

interface Project {
    title: string;
    description: string;
    skills: string[];
    repo_path: string;
}

const Projects = () => {
    const projects: Project[] = [
        {
            title: "Slice Social",
            description: 
            `Slice Social is a social media platform designed to better supplement
            real-life social engagement. Slice aims to connect users with their immediate
            social circles, rather than with a collective global community.
            I'm prioritizing a seamless user experience and a low-cost backend, with the
            goal of creating a comfortable, ad-free environment. With Slice, you gain the benefits
            of online connectivity that traditional social media platforms offer without having to
            expose yourself to the harmful features designed to keep you hyper-engaged.`,
            skills: ["React Native", "Typescript", "Node.js", "FastAPI", "Postgres", "Docker"],
            repo_path: '/SliceSocial-Frontend',
        },
    ];

    return (
        <section id="projects">
            <div className="projects-content">
                <h2>Featured Project</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.skills.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={GITHUB_URL+project.repo_path} target='_blank' className="btn">Frontend Repo</a>
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