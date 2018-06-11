import React, { Component } from "react";

const EventDate = props => {
  let date = new Date(props.date),
    locale = "en-us",
    day = date.getDate(),
    month = date.toLocaleString(locale, { month: "short" });

  return (
    <div className={props.className}>
      <span className="month">{month}</span>
      <span className="day">{day}</span>
    </div>
  );
};

class ArtistEvents extends Component {
  render() {
    return (
      <div className="artist__events">
        <ul className="artist__events__list">
          {this.props.events.map(event => {
            return (
              <li key={event.id}>
                <EventDate date={event.datetime} className="date" />
                <span className="venue">{event.venue.name}</span>
                <span className="place">
                  {event.venue.city}, {event.venue.country}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArtistEvents;
