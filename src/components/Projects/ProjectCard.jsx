import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, name, description, liveLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" loading='lazy' />
      <div className="project-content">
        <h2 className="project-title">{name}</h2>
        <p className="project-description">{description}</p>
        <div className="project-buttons">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn">
          🚀 View Live
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn outline">
          💻 GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
