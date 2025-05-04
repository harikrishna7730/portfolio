import React from 'react'
import "./Skills.css"
import html_icon from "../../assets/html-5.png"
import css_icon from "../../assets/css-3.png"
import javascript_icon from "../../assets/js.png"
import reactjs_icon from "../../assets/react.svg"
import bootstrap5_icon from "../../assets/bootstrap5.png"
import TailwindCss_icon from "../../assets/TailwindCss.png"
import Aos_icon from "../../assets/aos.jpg"
import nodejs_icon from "../../assets/nodejs.png"
import Expressjs_icon from "../../assets/expressjs2.png"
import restfulApi_icon from "../../assets/restful_api.png"
import mysql_icon from "../../assets/mysql.png"
import mongoDb_icon from "../../assets/mongodb.svg"
import git_icon from "../../assets/git.png"
import github_icon from "../../assets/github.png"
import postman_icon from "../../assets/postman.png"
import vercel_icon from "../../assets/vercel.svg"
import render_icon from "../../assets/render.png"
import vscode_icon from "../../assets/vscode.jpeg"
import Firebase_icon from "../../assets/firebase.webp"
const Skills = () => {
  return (
   <>
   <div className="skills-heading" id='skills'>
    <h1>Skills</h1>
   </div>
   <div className='skill-container'>
    <div className='skill-title'>
       <h1>Frontend</h1>
    </div>
   
    <div className='skill-section1'>
        <div className='skill'>
            <img src={html_icon} alt='' width={80} />
            <span>HTML 5</span>
        </div>
        <div className='skill'>
            <img src={css_icon} alt='' width={80}/>
            <span>CSS 3</span>
        </div>
        <div className='skill'>
            <img src={javascript_icon} alt='' width={80}/>
            <span>JavaScript</span>
        </div>
        <div className='skill'>
            <img src={reactjs_icon} alt='' width={80}/>
            <span>React.js</span>
        </div>
        <div className='skill'>
            <img src={bootstrap5_icon} alt='' width={80}/>
            <span>Bootstrap5</span>
        </div>
        <div className='skill'>
            <img src={TailwindCss_icon} alt='' width={80}/>
            <span>TailwindCss</span>
        </div>
        <div className='skill'>
            <img src={Aos_icon} alt='' width={80} height={76}/>
            <span>AOS</span>
        </div>
    </div>
    <div className='skill-title'>
       <h1>Backend</h1>
    </div>
        <div className='skill-section1'>
       <div className='skill'>
            <img src={nodejs_icon} alt='' width={80} />
            <span>NodeJs</span>
        </div>
        <div className='skill'>
            <img src={Expressjs_icon} alt=''  width={84}  height={76} />
            <span >ExpressJs</span>
        </div>
        <div className='skill'>
            <img src={restfulApi_icon} alt='' width={80} />
            <span>REST API</span>
        </div>
    </div>
    <div className='skill-title'>
       <h1>Database</h1>
    </div>
    <div className='skill-section1'>
       <div className='skill'>
            <img src={mysql_icon} alt='' width={80} />
            <span>MYSQL</span>
        </div>
        <div className='skill'>
            <img src={mongoDb_icon} alt='' width={80} />
            <span>MongoDB</span>
        </div>
    </div>
    <div className='skill-title'>
       <h1>Tools</h1>
    </div>
    <div className='skill-section1'>
       <div className='skill'>
            <img src={git_icon} alt='' width={80} />
            <span>Git</span>
        </div>
        <div className='skill'>
            <img src={github_icon} alt='' width={80} />
            <span>GitHub</span>
        </div>
        <div className='skill'>
            <img src={vscode_icon} alt='' width={80} />
            <span>VS code</span>
        </div>
        <div className='skill'>
            <img src={postman_icon} alt='' width={80} />
            <span>Postman</span>
        </div>
        <div className='skill'>
            <img src={vercel_icon} alt='' width={80} />
            <span>Vercel</span>
        </div>
        <div className='skill'>
            <img src={render_icon} alt='' width={80} />
            <span>Render</span>
        </div>
        <div className='skill'>
            <img src={Firebase_icon} alt='' width={80} />
            <span>Firebase</span>
        </div>
    </div>
   </div>
   </>
  )
}

export default Skills
