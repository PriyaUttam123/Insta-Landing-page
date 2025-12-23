import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexDirection: 'inherit' }}>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Connect. Share. <br /><span className="gradient-text">Discover.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Instagram helps you connect with people and communities you love.
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
