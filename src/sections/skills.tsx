// type defs
interface SkillCategory {
    category: string;
    skills: string[];
}

const Skills = () => {
    const skillCategories: SkillCategory[] = [
        {
            category: "Languages",
            skills: ["Python", "JavaScript", "C/C++", "TypeScript", "R", "HTML5", "CSS3"]
        },
        {
            category: "Frameworks/ Libraries",
            skills: ["React (Native)", "Node.js", "FastAPI"]
        },
        {
            category: "Databases",
            skills: ["PostgreSQL", "DynamoDB"]
        },
        {
            category: "Cloud & DevOps",
            skills: ["AWS Lambda, API Gateway, S3", "Docker", "Git"],
        },
        {
            category: "Tools & Technologies",
            skills: ["Postman", "pgAdmin", "Vite", "Jira", "REST", "JSON", "JWT", "Figma"],
        },
    ];

    return (
        <section id="skills">
            
            <div className="skills-content">
                <h2>Skills & Technologies</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.category}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 