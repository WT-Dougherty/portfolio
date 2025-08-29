import React from 'react';

interface SkillCategory {
    category: string;
    skills: string[];
}

const Skills = (): React.JSX.Element => {
    const skillCategories: SkillCategory[] = [
        {
            category: "Frontend",
            skills: ["React", "JavaScript", "HTML5", "CSS3", "TypeScript", "Tailwind CSS"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
        },
        {
            category: "Tools & Others",
            skills: ["Git", "Docker", "AWS", "Vite", "Webpack", "Jest"]
        }
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