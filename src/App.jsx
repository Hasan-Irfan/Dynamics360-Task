import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import eventsData from "./data/events";
import Contact from "./components/Contact";

function App() {
  const [search, setSearch] = useState("");

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Hero />

      <div id="events"  className="events-section py-5">
        <div className="container">
          <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Events</h2>
          <p className="text-muted">
            Handpicked events happening near you
          </p>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg shadow-sm"
              placeholder="🔍 Search events by name..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        </div>
      </div>

      <Contact />

    </>
  );
}

export default App;
