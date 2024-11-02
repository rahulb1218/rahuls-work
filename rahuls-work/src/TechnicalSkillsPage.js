// src/TechnicalSkillsPage.js

import React from 'react';

function TechnicalSkillsPage() {
  return (
    <div className="list-container">
      <div className="info">
        <div className='info-item'>
          <h1 style={{ marginTop: '30px' }}>
            Skills
          </h1>


          <div className="hbox">
            <p className='heading'>
            Languages
            </p>

          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            C++, Python, Swift, JavaScript, TypeScript, HTML/CSS, Bash
            </p>
 
          </div>


          <div className="hbox">
            <p className='heading'>
            Libraries & Frameworks
            </p>

          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            TensorFlow, React.js, SwiftUI, MongoDB, Node.js, React Native, Linux/Unix, BeautifulSoup, OpenCV, NumPy
            </p>
 
          </div>


          <div className="hbox">
            <p className='heading'>
            Developer Tools & Practices
            </p>

          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            UNIX, CMake, HPC, Jira, xCode, Cron, AWS, Scrum Team Dev, Agile Dev, Frontend + Backend Development, Machine Learning, Software Development, Full Stack
            </p>
 
          </div>






        </div>
      </div>
      <div className="floor"></div>
    </div>
  );
}

export default TechnicalSkillsPage;
