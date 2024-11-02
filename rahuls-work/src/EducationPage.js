// src/EducationPage.js

import React from 'react';
import './index.css';
import './ListPage.css';

function EducationPage() {
  return (
    <div className="list-container">
      <div className="info">
        <div className='info-item'>
          <h1 style={{ marginTop: '30px' }}>
            Education
          </h1>


          <div className="hbox">
            <p className='heading'>
                University of California, Davis
            </p>
            <p className='heading'>
                Davis, CA
            </p>
          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            Bachelor of Science in Computer Science, GPA: 3.7
            </p>
            <p className='subheading'>
            Sep. 2021 – Dec 2024
            </p>
          </div>

            <ul className="list">
              <li>Relevant Coursework: Object Oriented Programming, Data Structures and Algorithms, Computer Architecture, Machine Dependent Programming, Operating Systems, Computer Networks, Linear Algebra, Discrete Mathematics</li>
            </ul>


        </div>
      </div>
      <div className="floor"></div>
    </div>
  );
}

export default EducationPage;
