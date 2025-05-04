import React from "react";
import "./Projects.css";
import E_commers_pic from "../../assets/mern_stack_project_pic.png";
import Finance_tracker_pic from "../../assets/finance_tracker_pic.png";
import Netflix_react_pic from '../../assets/netfilx_project_reactjs.png';
import ProjectCard from "./ProjectCard.jsx";
const Projects = () => {
  return (
    <>
    <div className="project-heading" >
       <h1 id="projects">Projects</h1>
    </div>
    <div className="projects-main-container">
      <ProjectCard
        image={E_commers_pic}
        name="E-Commerce Website"
        description="A full-featured e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). Includes user authentication, product management, shopping cart, order history, and secure checkout — all backed by a robust RESTful API."
        liveLink="https://look-up-ashen.vercel.app/"
        githubLink="https://github.com/harikrishna7730/LookUp"
      />
      <ProjectCard
        image={Finance_tracker_pic}
        name="Finance Tracker"
        description="A clean and responsive finance tracking web app that lets users log income and expenses, visualize spending patterns with charts, and monitor balances in real-time. Built with React and local state management — no login required."
        liveLink="https://finance-tracker-ux9u.vercel.app/"
        githubLink="https://github.com/harikrishna7730/Finance-Tracker"
      />
      <ProjectCard
        image={Netflix_react_pic}
        name="Netflix Clone"
        description="A sleek and responsive Netflix UI clone built with ReactJS, featuring dynamic movie listings using the TMDB API, horizontal sliders, category-based browsing, and hover-play previews — replicating the core Netflix experience."
        liveLink="https://netflix-six-opal.vercel.app/"
        githubLink="https://github.com/harikrishna7730/netflix"
      />
    </div>
    </>
  );
};

export default Projects;
