import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>Lorem ipsum</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Feli</div>
          <div>29th June, 19:50</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails