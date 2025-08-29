import React from 'react';

const About = (): React.JSX.Element => {
    return (
        <section id="about">
            <div className="about-content">
                <h2>About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I'm a passionate Full-Stack Developer with a love for creating elegant, 
                            user-friendly web applications. With expertise in modern web technologies, 
                            I enjoy turning complex problems into simple, beautiful solutions.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, 
                            contributing to open-source projects, or enjoying outdoor activities. 
                            I believe in continuous learning and staying up-to-date with the latest 
                            industry trends.
                        </p>
                        <div className="about-details">
                            <div className="detail-item">
                                <strong>Experience:</strong> 3+ years in web development
                            </div>
                            <div className="detail-item">
                                <strong>Education:</strong> Computer Science Degree
                            </div>
                            <div className="detail-item">
                                <strong>Location:</strong> San Francisco, CA
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 