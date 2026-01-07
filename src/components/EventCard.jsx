function EventCard({ event }) {
  return (
    <div className="col-md-4 mb-4 bg-grey">
      <div className="card h-100 border-0 shadow-sm hover-card">
        <div className="card-body">
          <h5 className="card-title fw-bold">{event.name}</h5>
          <p className="text-muted small">
            📅 {event.date} • ⏰ {event.time}
          </p>
          <p className="mb-1">
            <strong>📍 {event.location}</strong>
          </p>
          <p className="text-muted">{event.description}</p>
        </div>
        <div className="card-footer bg-white border-0">
          <button className="btn btn-outline-success w-100">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
