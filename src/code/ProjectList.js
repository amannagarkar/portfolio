import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import  '../ProjectList.css'; // Import the ProjectCard component
import data from './data'; // Import your project data

const ProjectList = () => {

    const [visibleCards, setVisibleCards] = useState(6); // Initial number of visible cards
    const totalCards = data.length;
    
    const loadMore = () => {
        setVisibleCards(visibleCards + 6); // Increase the number of visible cards
    };
    
    return (
        <div className="ag-courses-cards" id="project-cards">
          <h1 style={{paddingBottom : '50px'}}>Projects</h1>
          <div className="project-grid">
            {data.slice(0, visibleCards).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
    
          {/* Display the "Load More" button if there are more cards to load */}
          {visibleCards < totalCards && (
            <button className="load-more-button" onClick={loadMore}>
              Load More
            </button>
          )}
        </div>
      );
};

export default ProjectList;
