// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {eachAppointmentDetails, toggleIsFavorite} = props
  const {id, title, date, isFavorite} = eachAppointmentDetails
  const onStartButtonClick = () => toggleIsFavorite(id)

  const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  console.log(newDate)
  const starImageUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appointment-container">
      <div>
        <p className="title">{title}</p>
        <p className="date">{newDate}</p>
      </div>
      <button
        type="button"
        onClick={onStartButtonClick}
        className="star-button"
        testid="star"
      >
        <img src={starImageUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
