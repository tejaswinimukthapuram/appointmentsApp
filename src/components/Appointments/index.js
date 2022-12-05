// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const initialAppointmentsList = []

class Appointments extends Component {
  state = {
    appointmentsList: initialAppointmentsList,
    title: '',
    date: '',
  }

  onAddButtonClick = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {id: uuidv4(), title, date, isFavorite: false}
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onStarredButtonClick = () => {
    const {appointmentsList} = this.state

    const filteredList = appointmentsList.filter(
      each => each.isFavorite === true,
    )

    this.setState({
      appointmentsList: filteredList,
    })
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {appointmentsList, title, date} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="upper-part">
            <form>
              <div>
                <h1 className="heading">Add Appointment</h1>
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  type="text"
                  id="title"
                  onChange={this.onTitleChange}
                  value={title}
                />
                <br />
                <label htmlFor="date">DATE</label>
                <br />
                <input
                  type="date"
                  id="date"
                  onChange={this.onDateChange}
                  value={date}
                />
                <br />
                <button
                  type="submit"
                  className="button"
                  onClick={this.onAddButtonClick}
                >
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
              className="appointments-image"
            />
          </div>
          <hr />
          <div className="appointments-star-btn-container">
            <h1 className="appointments-heading">Appointments</h1>
            <button
              type="button"
              className="starred-btn"
              onClick={this.onStarredButtonClick}
            >
              Starred
            </button>
          </div>
          <ul className="appointmentItems-container">
            {appointmentsList.map(each => (
              <AppointmentItem
                eachAppointmentDetails={each}
                toggleIsFavorite={this.toggleIsFavorite}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
