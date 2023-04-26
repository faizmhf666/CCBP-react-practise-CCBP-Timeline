// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <div>
        <h1>{projectTitle}</h1>
        <AiFillCalendar />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <img src={imageUrl} alt="project" />
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
