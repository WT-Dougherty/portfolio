import React from 'react';

const Home = (): React.JSX.Element => {
    return (
        <section id="home">
            <div className="home-content">
                <img src="/src/assets/headshot.jpeg" alt="Will Dougherty" className="headshot" />
                <div className="home-text">
                    <h1>Will Dougherty</h1>
                    <h2>Full-Stack Developer</h2>
                    <p>Passionate about creating innovative web solutions and building user-friendly applications</p>
                    <div className="home-buttons">
                        <a href="#projects" className="btn">View My Work</a>
                        <a href="#contact" className="btn">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home; 