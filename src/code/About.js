import React from 'react'
import '../About.css'

function About() {
  return (
    <section>
    <div className="row">
        <div className="col">
            <img className="headshot" src="https://i.pinimg.com/originals/9f/40/19/9f401978aff8294ddc31087d9abb4764.jpg" alt="Your Headshot"/>
        </div>
        <div className="col">
            <h1>Aman / अमन</h1>
            <h2>Software Engineer</h2>
            <p>I am a machine learning engineer with expertise in natural language processing and a passion for developing innovative solutions. 
              As a recent graduate of Santa Clara University's Master of Science program in Computer Science and Engineering, 
              I focused my studies on advanced techniques like deep learning and neural networks.<br></br>
            </p>
            <div className="social-buttons">
                <a href="https://www.linkedin.com/in/aman-nagarkar" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/nananananaaman" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://github.com/amannagarkar" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="/res/doc/Aman_Nagarkar_Resume.pdf" target='blank' rel='noopener noreferrer'><i className="fas fa-download"></i></a>
              </div>
        </div>
    </div>

</section>
  )
}

export default About