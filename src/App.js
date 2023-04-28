
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="section-nav">

            <ul>
              <li className="active"><a href="#About">About</a></li>
              <li><a href="#Timeline">Timeline</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </div>

          <section>
            <div className="row">
                <div className="col">
                    <img className="headshot" src="https://i.pinimg.com/originals/9f/40/19/9f401978aff8294ddc31087d9abb4764.jpg" alt="Your Headshot"/>
                </div>
                <div className="col">
                    <h1>Aman / अमन</h1>
                    <h2>Software Engineer</h2>
                    <p>Hello there,
                        I'm Aman a fullstack software engineer with 3 years of experience. 
                        I'm passionate about creating engaging solutions that delight users and drive 
                        business results. My skills include data engineering, backend development,
                        developing machine learning systems, parallel computing, data pipelining, distributed processing,
                        cloud computing, and ML DevOPs. 
                        <br/>I have worked on a diverse range of projects aimed at solving
                        various problems. I have enjoyed tackling these challenging problems and am always looking for new
                        opportunities to expand and improve my skill set and contribute to impactful projects
                    </p>
                    <div className="social-buttons">
                        <a href="https://www.linkedin.com/in/aman-nagarkar" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/nananananaaman" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://github.com/amannagarkar" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="../res/doc/resume.pdf" target='blank' rel='noopener noreferrer'><i className="fas fa-download"></i></a>
                      </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
