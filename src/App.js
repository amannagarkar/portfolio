
import './App.css';
import Header from './Header';
import './Header.css'
import Portfolio from './Portfolio';
import * as React from 'react';

function App() {
  return (
    <div className="App">
        <Header/> 

          <section>
            <div className="row">
                <div className="col">
                    <img className="headshot" src="https://i.pinimg.com/originals/9f/40/19/9f401978aff8294ddc31087d9abb4764.jpg" alt="Your Headshot"/>
                </div>
                <div className="col">
                    <h1>Aman / अमन</h1>
                    <h2>Software Engineer</h2>
                    <p>Hey there! I'm Aman, a full-stack software engineer with 3 years of experience. I love creating cool 
                      solutions that users can vibe happy and boost business. My skills include data engineering, backend development, 
                      machine learning systems, parallel computing, data pipelining, distributed processing, cloud computing, and ML 
                      DevOPs. I've worked on a bunch of different projects that solve all kinds of problems. I love a good challenge,
                      and I'm always looking for new opportunities to level up my skills and contribute to projects that make an impact.
                    </p>
                    <div className="social-buttons">
                        <a href="https://www.linkedin.com/in/aman-nagarkar" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/nananananaaman" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://github.com/amannagarkar" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="/res/doc/Aman_Nagarkar_Resume.pdf" target='blank' rel='noopener noreferrer'><i className="fas fa-download"></i></a>
                      </div>
                </div>
            </div>

            <div className='row'>
                <Portfolio/>
            </div>
        </section>
    </div>
  );
}

export default App;
