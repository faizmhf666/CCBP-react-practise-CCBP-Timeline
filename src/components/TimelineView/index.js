import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimeLineCard key={item.id} timelineItemsList={item} />
    }
    return <ProjectTimelineCard key={item.id} timelineItemsList={item} />
  }
  return (
    <div>
      <div className="chrono-container">
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(each => renderTimelineCard(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
