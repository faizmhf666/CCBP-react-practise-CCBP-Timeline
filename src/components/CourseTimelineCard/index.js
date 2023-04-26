import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimeLineCard = props => {
  const {timelineItemsList} = props
  const courseSideList = timelineItemsList.filter(
    each => each.categoryId === 'COURSE',
  )
  const {courseTitle, description, duration, tagsList} = courseSideList

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
