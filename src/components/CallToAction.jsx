import React from 'react';

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <h2 className="cta-title">Join over 2 billion people on Instagram</h2>
                <p className="cta-subtitle">Download the app and start sharing your moments today.</p>
                <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                    <button className="btn btn-primary">
                        Download on App Store
                    </button>
                    <button className="btn btn-secondary">
                        Get it on Google Play
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
