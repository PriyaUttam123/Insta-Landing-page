import React from 'react';

const Footer = () => {
    const links = [
        'Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy',
        'Terms', 'Top Accounts', 'Locations', 'Instagram Lite',
        'Threads', 'Contact Uploading & Non-Users', 'Meta Verified'
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    {links.map((link, index) => (
                        <a href="#" key={index}>{link}</a>
                    ))}
                </div>
                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Instagram from Meta
                </div>
            </div>
        </footer>
    );
};

export default Footer;
