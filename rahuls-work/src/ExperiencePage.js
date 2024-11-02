// src/ExperiencePage.js

import React from 'react';
import './ListPage.css';
function ExperiencePage() {
  return (
    <div className="list-container">
      <div className="info">
        <div className='info-item'>
          <h1 style={{ marginTop: '30px' }}>
            Experience
          </h1>


          <div className="hbox">
            <p className='heading'>
            Software Engineer Intern
            </p>
            <p className='heading'>
            June 2024 – Sep 2024
            </p>
          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            Lawrence Livermore National Laboratory
            </p>
            <p className='subheading'>
            Livemore, CA
            </p>
          </div>

          <ul className="list">
            <li>Implemented and integrated high-performance computing (HPC) RADIUSS open-source tools, including advanced profiling and performance analysis tools, to optimize and document code runtimes across multiple LLNL teams.</li>
            <li>Leveraged detailed performance data to identify bottlenecks and significantly improve code efficiency, enhancing runtime for complex simulations and computations on cutting-edge systems.</li>
          </ul>





          <div className="hbox">
            <p className='heading'>
            Software Engineer
            </p>
            <p className='heading'>
            Jan 2024 – Present
            </p>
          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            D2D Lab at UC Davis
            </p>
            <p className='subheading'>
            Davis, CA
            </p>
          </div>

          <ul className="list">
            <li>Converted an outdated PHP website to a modern React-based application, including porting graphing functionality to a Flask-based backend, resulting in a 60% performance improvement</li>
            <li>Enhanced UI/UX based on user survey insights, leading to a more efficient and intuitive experience by optimizing the frontend in React.</li>
            <li>Deployed the application on Vercel and managed data storage using AWS, ensuring reliable and scalable hosting solutions</li>
          </ul>





          <div className="hbox">
            <p className='heading'>
            Front End Developer
            </p>
            <p className='heading'>
            Sep 2023 – Dec 2023
            </p>
          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            Truckpedia
            </p>
            <p className='subheading'>
            Davis, CA
            </p>
          </div>

          <ul className="list">
            <li>Developed a profile edit screen, integrating form functionalities for password changes and profile picture updates using React Native and TypeScript</li>
            <li>Implemented camera roll integration, allowing users to effortlessly upload images from their devices</li>
            <li>Integrated Truckpedia’s API for efficient management and updating of driver profiles</li>
          </ul>
          




          <div className="hbox">
            <p className='heading'>
            Computer Science Instructor
            </p>
            <p className='heading'>
            June 2023 – Aug 2023
            </p>
          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            Lavner Education
            </p>
            <p className='subheading'>
            San Francisco, CA
            </p>
          </div>

          <ul className="list">
            <li>Taught complex computer science topics such as HTML/CSS, robotics, and game development in easy to digest lessons to students from 5-14 years old
            </li>
            <li>Managed a fleet of 100+ Windows laptops by ensuring all software was up to date and working properly for students</li>
          </ul>
        <div className='bottom-spacer'></div>







        </div>
      </div>
      <div className="floor"></div>
    </div>
  );
}

export default ExperiencePage;
