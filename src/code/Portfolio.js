import React from 'react'
import '../Portfolio.css'
import './ProjectList'
import ProjectList from './ProjectList'

function Portfolio() {
  return (
    <section id="portfolio">
        <div className='row'>
            <div className='col'>
                <ProjectList/>
            </div>    
        </div>
    </section>
  )
}

export default Portfolio