import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimeLineCard = props => {
  const {timelineItemsList} = props
  const {courseTitle, description, duration, tagsList} = timelineItemsList

  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <AiFillClockCircle />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      {tagsList.map(each => (
        <div>
          <p>{each.name}</p>
        </div>
      ))}
    </div>
  )
}

export default CourseTimeLineCard
