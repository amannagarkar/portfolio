import React from 'react'
import '../Header.css'
import Timer from '../component/Timer'


function Header() {
  return (
    <div className="section-nav">
    <script src="script.js"></script>
        
        <ul>
        <li className="active"><a href="#portfolio">projects</a></li>
        <li><a href="#Timeline">experience</a></li>
        <li><a href="#Contact">contact</a></li>
        <li><a href="/portfolio/res/doc/Aman_Nagarkar_Resume.pdf">resume</a></li>
        </ul>
        <div className='section-nav-date'>
          <Timer/>
        </div>

        

    </div>

  )
}

export default Header