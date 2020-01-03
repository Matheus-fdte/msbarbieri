import React from 'react';

export default ({ title, description }) => (
    <div className="sidebar">
        <h3 className="sidebar-title">{title}</h3>
        <p className="sidebar-description">{description}</p>
    </div>
);