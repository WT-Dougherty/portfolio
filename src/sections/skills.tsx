// type defs
interface SkillCategory {
    category: string;
    skills: string[];
}

const Skills = () => {
    const skillCategories: SkillCategory[] = [
        {
            category: "Frontend",
            skills: ["React (Native)", "JavaScript", "TypeScript", "HTML5", "CSS3"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Python", "FastAPI", "AWS Lambda", "DynamoDB", "PostgreSQL"]
        },
        {
            category: "Data Analysis",
            skills: ["NumPy", "Seaborn", "Matplotlib", "Pandas", "R", "Mathematica"]
        },
        {
            category: "Tools & Others",
            skills: ["Git", "Docker", "Jira", 'Postman', "pgAdmin", "SSL", "Vite"]
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