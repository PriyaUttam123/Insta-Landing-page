import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexDirection: 'inherit' }}>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Share your <span className="gradient-text">moments</span> with the world
                    </h1>
                    <p className="hero-subtitle">
                        Connect with friends, share your stories, and discover inspiring content from people around the globe.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" style={{ fontSize: '18px', padding: '16px 32px' }}>
                            Download on App Store
                        </button>
                        <button className="btn btn-secondary" style={{ fontSize: '18px', padding: '16px 32px' }}>
                            Get it on Google Play
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/hero-mockup.png" alt="Instagram App Mockup" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
