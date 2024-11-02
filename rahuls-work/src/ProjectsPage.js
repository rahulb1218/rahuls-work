// src/ProjectsPage.js

import React from 'react';

function ProjectsPage() {
  return (
    <div className="list-container">
      <div className="info">
        <div className='info-item'>
          <h1 style={{ marginTop: '30px' }}>
            Projects
          </h1>


          <div className="hbox">
            <p className='heading'>
            Live Security Feed
            </p>

          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            Python, Tensorflow, NumPy, OpenCV, Matplotlib, Git
            </p>
 
          </div>

          <ul className="list">
            <li>Trained machine learning model on a large dataset of 5000+ images containing people in indoor spaces</li>
            <li>Detected people within the camera frame with 92%+ accuracy
            </li>
          </ul>





          <div className="hbox">
            <p className='heading'>
            Linux-Based Threading Library
            </p>

          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            C, Linux, Make, Git
            </p>

          </div>

          <ul className="list">
            <li>Developed a threading library with key features including thread creation, context switching, and preemptive
            multitasking, ensuring efficient execution and resource management</li>
            <li>Implemented semaphores for thread synchronization, preventing resource starvation and handling complex concurrency
            scenarios</li>

          </ul>





          <div className="hbox">
            <p className='heading'>
            Tempo Tango
            </p>

          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            React.js, HTML, CSS, JS, Spotify API
            </p>
          </div>

          <ul className="list">
            <li>Built a web app for mobile devices that allows DJs to train their tempo matching skills</li>
            <li>Integrated Spotify API for song previews and to grab song tempos</li>
          </ul>
          




          <div className="hbox">
            <p className='heading'>
            ePantry
            </p>

          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            C++, QT GUI
            </p>

          </div>

          <ul className="list">
            <li>Utilized QT GUI to build a simple GUI for Android smart fridges to input groceries and their expiration dates
            </li>
            <li>Displayed all of the grocery items sorted by soonest to expired and highlighted expired items in red, allowing deletion as
            items were consumed or discarded.</li>
          </ul>

          




        <div className="hbox">
            <p className='heading'>
            Aggie Tracker
            </p>

          </div>

          <div className="hbox">
            <p className='subheading' style={{paddingLeft: '20px'}}>
            Python, SwiftUI, iOS, iPadOS, MongoDB, Git
            </p>

          </div>

          <ul className="list">
            <li>Used SwiftUI to create iOS app that allowed users to track macro values
            </li>
            <li>Webscraped UC Davis dining hall menu items using Python directly into MongoDB once a week</li>
          </ul>
        <div className='bottom-spacer'></div>






        </div>
      </div>
      <div className="floor"></div>
    </div>
  );
}

export default ProjectsPage;
