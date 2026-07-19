import PortfolioData from '../Data/PortfolioData'
import "./Project.css"

function Project() {
  const { projects} = PortfolioData;
  return (
    <div className="pane">
       <h2>My Project</h2>
       <ul className="project-list">
          {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
      </ul>
    </div>
  )
}

export default Project