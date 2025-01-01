// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));

    axios.get('http://localhost:5000/api/timetable')
      .then(res => setTimetable(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-4xl font-bold text-center">Rahul Public School</h1>
      </header>

      <section className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#timetable" className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 text-center">Timetable</a>
          <a href="#admissions" className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 text-center">Admissions</a>
          <a href="#news" className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 text-center">News & Events</a>
          <a href="#contact" className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 text-center">Contact Us</a>
        </div>
      </section>

      {/* Events Section */}
      <section id="news" className="p-6 bg-white shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="p-2 border-b">
              <strong>{event.title}</strong> - <span>{event.date}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Timetable Section */}
      <section id="timetable" className="p-6 bg-white shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Class Timetable</h2>
        <ul>
          {timetable.map((item, index) => (
            <li key={index} className="p-2 border-b">
              <strong>{item.day}:</strong> {item.subject}
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery Section */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 h-40 rounded-md"></div>
          <div className="bg-gray-200 h-40 rounded-md"></div>
          <div className="bg-gray-200 h-40 rounded-md"></div>
          <div className="bg-gray-200 h-40 rounded-md"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p>Email: school@example.com</p>
        <p>Phone: +1234567890</p>
        <div className="mt-4">
          <iframe
            className="w-full h-64"
            src="https://maps.google.com/maps?q=school%20address&output=embed"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>

      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 School Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
