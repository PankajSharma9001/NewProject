import React from "react";
import "animate.css";

const EventsAchievements = () => {
  const eventColors = [
    "from-red-500 to-pink-500",
    "from-purple-500 to-indigo-500",
    "from-green-500 to-teal-500",
    "from-yellow-500 to-orange-500",
    "from-blue-500 to-cyan-500",
    "from-gray-500 to-gray-700",
  ];

  const achievementColors = [
    "from-indigo-700 to-indigo-900",
    "from-teal-700 to-teal-900",
    "from-yellow-700 to-orange-900",
  ];

  const resultColors = [
    "from-blue-800 to-blue-900",
    "from-green-800 to-green-900",
    "from-red-800 to-red-900",
  ];

  return (
    <section className="bg-white text-white py-16">
      <div className="container mx-auto text-center">
        {/* Events Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mt-20 text-yellow-300 mb-8 animate__animated animate__fadeIn animate__delay-0.2s">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              { title: "National Sports Day", date: "August 29, 2024", location: "School Sports Grounds", description: "Our students participate in National Sports Day with exceptional sportsmanship." },
              { title: "Science Exhibition", date: "September 15, 2024", location: "School Auditorium", description: "Students showcase their scientific experiments in the upcoming Science Exhibition." },
              { title: "Annual School Festival", date: "October 12, 2024", location: "School Campus", description: "Join us for a fun-filled day with cultural performances, food stalls, and games." },
              { title: "Annual Sports Meet", date: "November 5, 2024", location: "School Sports Grounds", description: "A day to celebrate athleticism and team spirit with friendly competitions." },
              { title: "Student Art Exhibition", date: "November 20, 2024", location: "School Gallery", description: "Exhibition showcasing the amazing artwork and creative talents of our students." },
              { title: "Literature Festival", date: "December 5, 2024", location: "School Auditorium", description: "A celebration of literary talent with poetry readings, book launches, and more." },
            ].map((event, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r ${
                  eventColors[idx % eventColors.length]
                } p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-${0.5 + idx * 0.5}s`}
              >
                <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
                  {event.title}
                </h3>
                <p className="text-white-300 mb-4">{event.description}</p>
                <p className="text-white-400 text-sm">Date: {event.date}</p>
                <p className="text-white-400 text-sm">Location: {event.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-300 mb-8 animate__animated animate__fadeIn animate__delay-0.2s">
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              {
                title: "National Sports Day Victory",
                description: "Our team won several medals, showcasing outstanding performance in various sports.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Best Science Olympiad Team",
                description: "Our students won the first prize in the National Science Olympiad, proving their dedication and innovation in science.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Annual School Drama",
                description: "The annual drama performance was a huge success, with students performing with great enthusiasm.",
                image: "https://via.placeholder.com/300x200",
              },
            ].map((achievement, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r ${
                  achievementColors[idx % achievementColors.length]
                } p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-${0.5 + idx * 0.5}s`}
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
                  {achievement.title}
                </h3>
                <p className="text-white-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Results Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-300 mb-8 animate__animated animate__fadeIn animate__delay-0.2s">
            Top Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Top Science Olympiad Winner",
                description: "Our student secured the 1st place in the National Science Olympiad, showcasing innovative problem-solving skills.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Top 10th Class Result",
                description: "Our 10th class students have achieved top results in academics, excelling in board exams with a high percentage.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Top Debate Winner",
                description: "Our student won 1st place in the national debate competition, demonstrating excellent critical thinking and public speaking skills.",
                image: "https://via.placeholder.com/300x200",
              },
            ].map((result, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r ${
                  resultColors[idx % resultColors.length]
                } p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-${0.5 + idx * 0.5}s`}
              >
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
                  {result.title}
                </h3>
                <p className="text-white-300">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAchievements;
