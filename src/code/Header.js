import React from 'react'
import '../Header.css'
import Timer from '../component/Timer'


function Header() {
  return (
    <div className="section-nav">
    <script src="script.js"></script>
        
        <ul>
        <li className="active"><a href="#portfolio">Projects</a></li>
        <li><a href="#Timeline">Experience</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="/res/doc/Aman_Nagarkar_Resume.pdf">Resume</a></li>
        </ul>
        <div className='section-nav-date'>
          <Timer/>
        </div>

        

    </div>

  )
}

export default Header