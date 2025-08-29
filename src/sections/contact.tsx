import React from 'react';

const Contact = (): React.JSX.Element => {
    return (
        <section id="contact">
            <div className="contact-content">
                <h2>Get In Touch</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>
                            I'm always interested in hearing about new opportunities, 
                            interesting projects, or just want to say hello!
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <strong>Email:</strong>
                                <a href="mailto:will.dougherty@example.com">will.dougherty@example.com</a>
                            </div>
                            <div className="contact-item">
                                <strong>LinkedIn:</strong>
                                <a href="https://linkedin.com/in/willdougherty" target="_blank" rel="noopener noreferrer">linkedin.com/in/willdougherty</a>
                            </div>
                            <div className="contact-item">
                                <strong>GitHub:</strong>
                                <a href="https://github.com/willdougherty" target="GitHub">github.com/willdougherty</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 