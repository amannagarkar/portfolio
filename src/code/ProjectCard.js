import React from 'react';
import '../ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="ag-courses-card" data-category={project.Category[0]}>
      

      <div class="ag-courses_item">
                    <a href="#portfolio" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">{project.Title}</div>
                        <div className="ag-courses-item_date-box">Topics: 
                        <span className="ag-courses-item_date">{project.Category[0]}</span>
                        </div>
                    </a>
                    </div>

    </div>
  );
};

export default ProjectCard;
