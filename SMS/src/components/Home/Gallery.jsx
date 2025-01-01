import React from "react";
import img1 from '../Auth/Images/r1.jpg';
import img2 from '../Auth/Images/r2.jpg';
import img3 from '../Auth/Images/r3.jpg';
import img4 from '../Auth/Images/r4.jpg';
import img5 from '../Auth/Images/r5.jpg';
import img6 from '../Auth/Images/r16.jpg';
import img7 from '../Auth/Images/r7.jpg';
import img8 from '../Auth/Images/r8.jpg';
import img9 from '../Auth/Images/r9.jpg';
import img10 from '../Auth/Images/r10.jpg';
import img11 from '../Auth/Images/r11.jpg';
import img12 from '../Auth/Images/r12.jpg';
import img13 from '../Auth/Images/r13.jpg';
import img14 from '../Auth/Images/r14.jpg';
import img15 from '../Auth/Images/r15.jpg';

const Gallery = () => {
  const sections = [
    {
      title: "Cultural Events 🎭",
      description: "Experience the cultural richness and diversity at Rahul Public School.",
      items: [
        { img: img1, title: "Annual Day Celebration", emoji: "🎉" },
        { img: img2, title: "Music Fest 2024", emoji: "🎶" },
        { img: img3, title: "Art Workshop", emoji: "🎨" },
      ],
    },
    {
      title: "Sports Events 🏅",
      description: "A sneak peek into our athletic achievements and competitions.",
      items: [
        { img: img4, title: "Sports Day 2024", emoji: "🏃‍♂️" },
        { img: img5, title: "Football Championship", emoji: "⚽" },
        { img: img6, title: "Yoga Day", emoji: "🧘‍♀️" },
      ],
    },
    {
      title: "Academic Achievements 📚",
      description: "Celebrating the academic milestones and achievements of our students.",
      items: [
        { img: img7, title: "Science Exhibition", emoji: "🔬" },
        { img: img8, title: "Math Olympiad Winners", emoji: "📏" },
        { img: img9, title: "Debate Competition", emoji: "🗣️" },
      ],
    },
    {
      title: "Festivals & Celebrations 🎊",
      description: "Join us in celebrating various festivals and special occasions.",
      items: [
        { img: img10, title: "Diwali Celebration", emoji: "🪔" },
        { img: img11, title: "Christmas Party", emoji: "🎅" },
        { img: img12, title: "Independence Day", emoji: "🇮🇳" },
      ],
    },
    {
      title: "Clubs & Activities 💡",
      description: "Snapshots of our engaging extracurricular activities.",
      items: [
        { img: img13, title: "Robotics Club", emoji: "🤖" },
        { img: img14, title: "Eco Club Plantation Drive", emoji: "🌱" },
        { img: img15, title: "Drama Club Performance", emoji: "🎭" },
      ],
    },
  ];

  return (
    <section className="bg-white text-white py-16">
      <div className="container mx-auto">
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-bold text-yellow-300 mb-6 mt-20 text-center animate__animated animate__fadeIn">
          Our Gallery <span role="img" aria-label="camera">📸</span>
        </h2>
        <p className="text-lg text-blue-600 mb-12 text-center animate__animated animate__fadeIn animate__delay-0.5s">
          A glimpse into the vibrant life at Rahul Public School, where learning and fun go hand in hand.
        </p>

        {/* Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="mb-12 p-6 bg-white shadow-md rounded-lg border border-gray-200 animate__animated animate__fadeInUp"
          >
            <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-600 mb-6">{section.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg border border-gray-300 hover:shadow-xl hover:border-gray-400 transform hover:scale-105 transition duration-300"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-center text-lg font-medium text-indigo-900">
                    {item.emoji} {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
