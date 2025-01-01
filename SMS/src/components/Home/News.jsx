import React from "react";
import "animate.css"; // Importing animate.css for animations
import images1 from "../Auth/Images/Annual.jpg";
import images2 from "../Auth/Images/art.jpg";
import images3 from "../Auth/Images/Awards.jpg";
import images4 from "../Auth/Images/Calture.jpg";
import images5 from "../Auth/Images/Results.jpg";
import images6 from "../Auth/Images/Science.jpg";
import images7 from "../Auth/Images/talent.jpg";
import images8 from "../Auth/Images/Annual.jpg";
import images9 from "../Auth/Images/Annual.jpg";

const News = () => {
  const events = [
    {
      id: 1,
      title: "Annual Day Celebration",
      date: "January 20, 2024",
      description:
        "🎉 Join us for a grand celebration of our school’s achievements, where students will showcase their talents through various performances, including music, dance, and drama 🎭. It’s a day filled with joy, pride, and inspiration! ✨",
      image: images1,
      video: "https://www.youtube.com/embed/xyz123",
    },
    {
      id: 2,
      title: "Sports Meet",
      date: "February 10, 2024",
      description:
        "🏅 Our annual sports meet brings together students from all grades to compete in a series of exciting sports events 🏃‍♀️. From track races to field games, there’s something for everyone! 🤾‍♂️ It’s a day of friendly competition and team spirit 🤝.",
      image: images2,
      video: "https://www.youtube.com/embed/xyz456",
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "March 5, 2024",
      description:
        "👨‍👩‍👧‍👦 We invite all parents to meet with our teachers to discuss their child’s progress 📚. This is a great opportunity for parents and teachers to collaborate in shaping the educational journey of each student 🤝.",
      image: images3,
      video: "https://www.youtube.com/embed/xyz789",
    },
    {
      id: 4,
      title: "Art Exhibition",
      date: "April 15, 2024",
      description:
        "🎨 Our students’ creativity shines at the annual art exhibition! From paintings 🖌️ to sculptures 🗿, the exhibition showcases the immense talent and artistic skills of our students. Don’t miss the chance to experience art at its best! 🌟",
      image: images4,
      video: "https://www.youtube.com/embed/xyz101",
    },
    {
      id: 5,
      title: "Science Fair",
      date: "May 22, 2024",
      description:
        "🧪 Our annual science fair features amazing student projects that explore various scientific principles 🔬. Get ready for interactive displays, experiments, and demonstrations that will ignite the curiosity of young minds! 🔍",
      image: images5,
      video: "https://www.youtube.com/embed/xyz102",
    },
    {
      id: 6,
      title: "Talent Show",
      date: "June 10, 2024",
      description:
        "🌟 Our talent show is an evening to remember, showcasing the diverse talents of our students 🎤. From singing 🎶 to dancing 💃, it’s a celebration of creativity and passion. Get ready for an unforgettable performance! 🎉",
      image: images6,
      video: "https://www.youtube.com/embed/xyz103",
    },
    {
      id: 7,
      title: "Field Trip",
      date: "July 5, 2024",
      description:
        "🚍 Our field trips take students on exciting educational journeys 🚂. This year, we’re visiting local museums 🏺 and historical sites 🏰, giving students a hands-on learning experience outside the classroom! 📚",
      image: images7,
      video: "https://www.youtube.com/embed/xyz104",
    },
    {
      id: 8,
      title: "Cultural Fest",
      date: "August 30, 2024",
      description:
        "🌍 Celebrate cultural diversity at our Cultural Fest, where students will present dance performances 💃, music 🎶, and traditional attire 👗. It’s a beautiful way to honor the variety of cultures in our school community! 🌈",
      image: images8,
      video: "https://www.youtube.com/embed/xyz105",
    },
    {
      id: 9,
      title: "Graduation Ceremony",
      date: "September 15, 2024",
      description:
        "🎓 The culmination of years of hard work and dedication, our graduation ceremony is a special moment for our students 👩‍🎓. It’s a day to celebrate their achievements, reflect on their journey, and look ahead to their bright future! 🌟",
      image: images9,
      video: "https://www.youtube.com/embed/xyz106",
    },
  ];

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];

  return (
    <div className="bg-white text-white py-16">
      <h2 className="text-3xl font-bold text-center mt-20 mb-6 text-yellow-300 animate__animated animate__fadeIn animate__delay-0.3s">
        News & Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`${colors[index % colors.length]} text-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-0.5s`}
          >
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-200 mb-2">{event.date}</p>
            <p className="text-xs text-gray-100 mb-3">{event.description}</p>
            <div className="mb-3">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <div className="h-full">
              <iframe
                width="100%"
                height="200"
                src={event.video}
                title={event.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
