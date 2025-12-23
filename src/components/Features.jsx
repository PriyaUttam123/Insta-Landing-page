import React from 'react';
import { Camera, MessageCircle, Heart } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Camera size={32} />,
            title: 'Share Photos & Videos',
            desc: 'Post your favorite moments with beautiful filters and editing tools that make every photo look amazing.'
        },
        {
            icon: <Heart size={32} />,
            title: 'Stories & Reels',
            desc: 'Share quick updates with Stories or create engaging short videos with Reels to reach new audiences.'
        },
        {
            icon: <MessageCircle size={32} />,
            title: 'Direct Messages',
            desc: 'Stay connected with friends through private messages, voice notes, and video calls.'
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Instagram?</h2>
                    <p className="section-subtitle">Everything you need to share your story</p>
                </div>
                <div className="features-grid">
                    {features.map((item, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{item.icon}</div>
                            <h3 className="feature-title">{item.title}</h3>
                            <p className="feature-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
