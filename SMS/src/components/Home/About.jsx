import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "animate.css";
import images from '../Auth/Images/JPRai.jpg'

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AboutUs = () => {
  // Sample data for chart
  const chartData = {
    labels: ["1998", "2005", "2010", "2015", "2020", "2024"], // Timeline years
    datasets: [
      {
        label: "Student Enrollment",
        data: [150, 300, 450, 700, 900, 1200], // Sample student numbers over the years
        backgroundColor: "rgba(255, 159, 64, 0.7)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Growth in Student Enrollment Over the Years",
        font: {
          size: 18
        },
        color: "#FFCB00"
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#FFCB00",
        bodyColor: "#fff",
        borderColor: "#FFCB00",
        borderWidth: 1
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year 📅",
          color: "#FFCB00"
        }
      },
      y: {
        title: {
          display: true,
          text: "Number of Students 🎓",
          color: "#FFCB00"
        },
        beginAtZero: true
      }
    }
  };

  return (
    <section className="bg-white text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-6 mt-20 animate__animated animate__fadeIn animate__delay-0.3s">
          About Us 🌟
        </h2>
        <p className="text-lg text-blue-600 mb-12 animate__animated animate__fadeIn animate__delay-0.5s">
          Rahul Public School is committed to nurturing young minds through innovative education, fostering creativity, and empowering our students to excel both academically and personally. Our philosophy revolves around a student-centric approach to learning, with an emphasis on cultivating curiosity, resilience, and a passion for lifelong learning. We believe in shaping individuals who are not only academically proficient but also socially responsible and compassionate. Through our holistic approach, we empower our students to navigate the challenges of an ever-changing world and succeed in their academic pursuits as well as in life beyond the classroom. 📚💡
        </p>

 {/* Additional Information - Achievements */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-red-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-2xl font-semibold text-white mb-4">🏆 State and National Awards</h3>
            <p className="text-gray-100">
              Rahul Public School has consistently excelled in various academic and sports competitions at the state and national levels. From science exhibitions to athletic events, our school has earned accolades in a wide range of fields.
            </p>
          </div>

          <div className="p-6 bg-blue-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-1.5s">
            <h3 className="text-2xl font-semibold text-white mb-4">💻 Digital Learning Platforms</h3>
            <p className="text-gray-100">
              We have integrated advanced digital learning platforms, including virtual classrooms and multimedia presentations, enabling students to learn at their own pace.
            </p>
          </div>

          <div className="p-6 bg-green-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-2xl font-semibold text-white mb-4">🤝 Community Service</h3>
            <p className="text-gray-100">
              Our students actively participate in community service projects, fostering a sense of responsibility and empathy through meaningful initiatives.
            </p>
          </div>

          <div className="p-6 bg-purple-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-2.5s">
            <h3 className="text-2xl font-semibold text-white mb-4">🎭 Cultural Activities</h3>
            <p className="text-gray-100">
              Regular events like art exhibitions and talent shows provide students with opportunities to express their creativity and build essential skills.
            </p>
          </div>

          <div className="p-6 bg-yellow-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-2xl font-semibold text-white mb-4">🔬 Innovative Teaching Methods</h3>
            <p className="text-gray-100">
              Our innovative teaching approaches cater to diverse learning needs, engaging students dynamically and effectively.
            </p>
          </div>

          <div className="p-6 bg-orange-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-3.5s">
            <h3 className="text-2xl font-semibold text-white mb-4">🌍 Global Exposure</h3>
            <p className="text-gray-100">
              Through exchange programs and international collaborations, students gain a broader perspective and a sense of global citizenship.
            </p>
          </div>
        </div>


        <section className="mt-16 animate__animated animate__fadeIn animate__delay-4s">
      <h3 className="text-3xl font-bold text-yellow-300 mb-6 text-center">📊 Our Growth Over the Years</h3>
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        {/* Chart */}
        <div className="w-full max-w-4xl mx-auto">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </section>

       {/* Principal's Message Section */}
<div className="mt-16 animate__animated animate__fadeIn animate__delay-4.5s">
  <h3 className="text-3xl font-bold text-yellow-300 mb-6 text-center">📝 Message from the Principal</h3>
  <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center relative h-screen">

    {/* Logo at the top */}
    <div className="w-32 h-32 rounded-full border-4 border-yellow-300 shadow-lg mb-6">
      <img
        src={images} // Replace with actual principal image
        alt="Principal JP Rai"
        className="w-full h-full rounded-full object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="text-center px-4">
      <h4 className="text-2xl font-semibold text-yellow-300 mb-4">
        JP Rai - Principal of Rahul Public School
      </h4>
      <p className="text-lg text-white-300">
        "At <strong>Rahul Public School</strong>, we believe in nurturing the holistic development of our students 🌱. We strive to create an environment that challenges them intellectually 💡, rewards their hard work and dedication 🏆, and supports them emotionally 🤝. Our approach is built on compassion, empathy, and the development of values that will serve them for life 🧡.
        <br /><br />
        We understand that education is not just about academics 📚 but also about personal growth 🌟. Therefore, we encourage our students to explore their passions, develop critical thinking 🧠, and engage in meaningful activities that promote social responsibility 🌍.
        <br /><br />
        Our vision is clear: to shape tomorrow's leaders 💪. We aim to equip our students with the knowledge, skills, and character needed to succeed in an ever-changing world 🌎. Through education and values, we are building the leaders of tomorrow who will make a difference in the world 🌈."
      </p>
    </div>
  </div>
</div>


{/* About Principal Section */}
<section className="text-white py-10 mt-8">
  <h3 className="text-3xl font-bold text-yellow-300 mb-6 animate__animated animate__fadeIn animate__delay-4.5s">
    About Our Principal 👨‍🏫
  </h3>
  <div className="container mx-auto text-center">
    <div className="relative bg-gray-900 p-8 rounded-lg shadow-lg">
      {/* Logo at the top */}
      <div className="relative mb-6 mx-auto">
        <img
          src={images} // Ensure this path is correct for the principal's image
          alt="Principal JP Rai"
          className="w-32 h-32 rounded-full border-4 border-yellow-300 shadow-lg mx-auto"
        />
      </div>

      {/* Content below the logo */}
      <div className="mt-10 text-center">
        <h4 className="text-2xl font-semibold text-yellow-300 mb-4">
          Mr. JP Rai - Principal
        </h4>
        <p className="text-lg text-white-300">
          With over 20 years of experience in education 🎓, <strong>Mr. JP Rai</strong> has dedicated his life to shaping the future of young minds. Throughout his career, he has demonstrated an unwavering commitment to excellence, both in academics 📚 and extracurricular activities ⚽🎨.
          <br /><br />
          Starting as a teacher 👨‍🏫, he quickly rose through the ranks due to his passion for education and leadership skills 🌟. Over the years, Mr. Rai has led numerous initiatives to improve teaching standards, integrate technology 💻 into classrooms, and provide students with opportunities to grow in all aspects of life 🌱.
          <br /><br />
          Under his leadership, Rahul Public School has seen tremendous growth, not only in academic performance 📈 but also in sports 🏆, cultural events 🎭, and community involvement 🌍. He believes in creating a balanced environment where students can excel academically and socially 🤝.
          <br /><br />
          Mr. Rai’s leadership philosophy is rooted in the belief that education is the key to unlocking a brighter future 🔑. He strives to create an inclusive atmosphere where every student feels valued and empowered to reach their full potential 🚀.
        </p>
      </div>
    </div>
  </div>
</section>


      </div>
    </section>
  );
};

export default AboutUs;
