import React, { useState } from 'react';


function Find() {
    const [leftFormData, setLeftFormData] = useState({ question1: '' });
    const [rightFormData, setRightFormData] = useState({
        question1: '',
        question2: '',
        question3: ''
    });
    const [filteredEvents, setFilteredEvents] = useState([]);

    const events = [
        { id: 1, category: 'Pets', name: 'Doggie Pool Day', date: 'June 24, 5pm', location: "Host's Home", description: "Bring your pup for a backyard pool day!", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
        { id: 2, category: 'Pets', name: 'Golden Retriever Meetup', date: 'June 25, 12:30pm', location: 'Unity Park', description: "Come hang out with fellow Golden Retriever owners at Unity park.", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
        { id: 3, category: 'Sports/Recreation', name: 'Community Kickball Game', date: 'June 26, 6:30pm', location: 'Local Field', description: "Come on out to the Local Field to play a casual game of kickball. Bring the whole family!", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
        { id: 4, category: 'Sports/Recreation', name: 'Yoga in the Park', date: 'June 27, 7:30am', location: 'Green Park', description: "Come relax with us for morning yoga at Green Park. Adults only.", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
        { id: 5, category: 'Arts/Crafts', name: 'Painting in the Park', date: 'June 28, 9:30am', location: 'Neighborhood Park', description: "Bring your own canvas and paint and enjoy the peace of painting with friends.", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
        { id: 6, category: 'Arts/Crafts', name: 'Crochet Club', date: 'June 29, 2pm', location: 'Library', description: "Whether you're new to crochet, or a seasoned artist, join us at the library!", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
        { id: 7, category: 'Charity', name: 'Charity Run', date: 'June 30, 8am', location: 'City Center', describe: "Sign up to participate in a 5k through town to support our local schools.", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
        { id: 8, category: 'Charity', name: 'Community Food Drive', date: 'July 1, 10am-1pm', location: 'Community Center', description: "We will be collecting non-perishable food items at the Community Center. Drop off, or stay a while!", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
        { id: 9, category: 'Miscellaneous', name: 'Coffee Shop Meetup', date: 'July 2, 4-6pm', location: 'Local Cafe', description: "Coffee enjoyers unite at Local Cafe to simply sip coffee and get to know people.", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
        { id: 10, category: 'Miscellaneous', name: 'Book Club Meeting', date: 'July 3, 11am', location: 'Bookstore', description: "Come join us as we read and discuss the latest chapter of the current Novel. All are welcome.", signup: "Contact the host to reserve your spot!", contact: 'savannah@gmail.com' },
    ];

    const handleLeftChange = (event) => {
        const { name, value } = event.target;
        setLeftFormData({ ...leftFormData, [name]: value });
    };

    const handleRightChange = (event) => {
        const { name, value } = event.target;
        setRightFormData({ ...rightFormData, [name]: value });
    };

    const handleLeftSubmit = (event) => {
        event.preventDefault();
        console.log('Left form data:', leftFormData);
    };

    const handleRightSubmit = (event) => {
        event.preventDefault();
        console.log('Right form data:', rightFormData);
        const results = events.filter(event => event.category === rightFormData.question1);
        setFilteredEvents(results.slice(0, 2)); // Display only the first 2 matching events
    };

    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (eventId) => {
        const event = events.find(event => event.id === eventId);
        setSelectedEvent(event);
    };

    return (
        <div className="find-container">
            <h1>Find an Event</h1>
            <div className="forms-container">
                <form onSubmit={handleLeftSubmit} className="left-form">
                    <div className="form-group">
                        <h2>AI event finder</h2>
                        <h3>Ask AI to show you public events in your community.</h3>
                        <label htmlFor="leftQuestion1">Find Public Events:</label>
                        <input
                            type="text"
                            id="leftQuestion1"
                            name="question1"
                            placeholder="What local events are happening in my town this week?"
                            value={leftFormData.question1}
                            onChange={handleLeftChange}
                        />
                    </div>
                    <button type="submit">Ask</button>
                </form>

                <form onSubmit={handleRightSubmit} className="right-form">
                    <div className="form-group">
                        <h2>Find privately hosted events near you.</h2>
                        <h3>What type of events are you interested in?</h3>
                        <label htmlFor="rightQuestion1">Choose a category that interests you:</label>
                        <select
                            id="rightQuestion1"
                            name="question1"
                            value={rightFormData.question1}
                            onChange={handleRightChange}
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="Pets">Pets</option>
                            <option value="Sports/Recreation">Sports/Recreation</option>
                            <option value="Arts/Crafts">Arts/Crafts</option>
                            <option value="Charity">Charity</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rightQuestion2">Choose a distance you are willing to commute:</label>
                        <select
                            id="rightQuestion2"
                            name="question2"
                            value={rightFormData.question2}
                            onChange={handleRightChange}
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="1 mile">1 mile</option>
                            <option value="5 miles">5 miles</option>
                            <option value="10 miles">10 miles</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rightQuestion3">When do you wish to attend an event?</label>
                        <select
                            id="rightQuestion3"
                            name="question3"
                            value={rightFormData.question3}
                            onChange={handleRightChange}
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="Today">Today</option>
                            <option value="This week">This week</option>
                            <option value="This month">This month</option>
                        </select>
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="results-details-container">
                <div className="event-results">
                    <h4>Event Results:</h4>
                    <h5>Click on an event to see more details.</h5>
                    <ul>
                        {filteredEvents.map(event => (
                            <li key={event.id} onClick={() => handleEventClick(event.id)} style={{ cursor: 'pointer' }}>
                                <strong>{event.name}</strong><br />
                                When: {event.date}<br />
                                Where: {event.location}
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedEvent && (
                    <div className="event-details">
                        <h2>{selectedEvent.name}</h2>
                        <p><strong>Description:</strong> {selectedEvent.description}</p>
                        <p><strong>Signup:</strong> {selectedEvent.signup}</p>
                        <p><strong>Contact:</strong> {selectedEvent.contact}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Find;