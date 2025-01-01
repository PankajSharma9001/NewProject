import React from "react";
import schoolImage from "../Auth/Images/school.jpg"; // Replace with your school image
import classroomImage from "../Auth/Images/classroom.jpg"; // Replace with a classroom image
import playgroundImage from "../Auth/Images/playground.jpg"; // Replace with a playground image
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


// Import Swiper and necessary modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Add autoplay CSS if needed
import { EffectFade, Navigation, Autoplay } from "swiper/modules";


const Home = () => {
  return (
    <div className="bg-white text-white py-16 ">
      {/* Hero Section with Slider */}
      <header className="text-center bg-white-100 rounded-2xl text-white py-16">
      <h1 className="text-5xl font-extrabold text-yellow-300 mb-6 transform transition duration-500 ease-in-out hover:scale-110 hover:text-blue-900">
  Welcome to Rahul Public School
</h1>
<p className="mt-4 text-xl text-blue-600 max-w-3xl mx-auto text-center animate__animated animate__fadeIn animate__delay-1s">
  At Rahul Public School, we believe in shaping young minds and nurturing future leaders. Our primary goal is to offer a holistic educational experience where each student can grow academically, socially, and emotionally. With an emphasis on creativity, critical thinking, and moral development, we aim to provide students with the skills they need to succeed in a rapidly evolving world.
</p>

        
        {/* Swiper Image Slider */}
        <Swiper
          effect="fade"
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Autoplay]}
          className="mt-8 w-full max-w-4xl mx-auto rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <img
              src={schoolImage}
              alt="School Building"
              className="rounded-lg object-cover"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <img
              src={classroomImage}
              alt="Classroom"
              className="rounded-lg object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={playgroundImage}
              alt="Playground"
              className="rounded-lg object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </header>

{/* Why Choose Us Section */}
<section className="container mx-auto py-10">
  <h2 className="text-3xl font-extrabold text-center text-yellow-300 mb-8">
    Why Choose Rahul Public School?
  </h2>
  <p className="text-center text-xl max-w-2xl mx-auto mb-12 text-blue-600">
    At Rahul Public School, we are dedicated to creating an enriching and transformative educational experience, fostering academic excellence, personal growth, and a well-rounded future for every student. Here's why we stand out:
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Reusable Background Color */}
    <div className="p-6 bg-[#964734] text-white shadow-lg rounded-lg">
      <img
        src={classroomImage}
        alt="Classroom"
        className="w-full h-40 object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      />
      <h3 className="text-2xl font-bold mb-4 text-yellow-300">Modern Classrooms</h3>
      <p className="text-lg">
        Our classrooms are equipped with state-of-the-art technology and resources that enhance interactive learning and creativity.
      </p>
    </div>

    <div className="p-6 bg-[#964734] text-white shadow-lg rounded-lg">
      <img
        src={classroomImage}
        alt="Extracurricular"
        className="w-full h-40 object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      />
      <h3 className="text-2xl font-bold mb-4 text-yellow-300">Extracurricular Activities</h3>
      <p className="text-lg">
        We offer a wide range of extracurricular activities, from sports to cultural events, encouraging students to explore their talents and passions.
      </p>
    </div>

    <div className="p-6 bg-[#964734] text-white shadow-lg rounded-lg">
      <img
        src={schoolImage}
        alt="Safe Environment"
        className="w-full h-40 object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      />
      <h3 className="text-2xl font-bold mb-4 text-yellow-300">Safe & Nurturing Environment</h3>
      <p className="text-lg">
        We prioritize the safety and well-being of our students, providing a supportive and caring atmosphere that helps them thrive.
      </p>
    </div>

    <div className="p-6 bg-[#964734] text-white shadow-lg rounded-lg">
      <img
        src={playgroundImage}
        alt="Sports Facilities"
        className="w-full h-40 object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      />
      <h3 className="text-2xl font-bold mb-4 text-yellow-300">Sports Facilities</h3>
      <p className="text-lg">
        Our campus includes top-notch sports facilities for football, basketball, cricket, and more to promote physical fitness.
      </p>
    </div>

    <div className="p-6 bg-[#964734] text-white shadow-lg rounded-lg">
      <img
        src={schoolImage}
        alt="Global Curriculum"
        className="w-full h-40 object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      />
      <h3 className="text-2xl font-bold mb-4 text-yellow-300">Global Curriculum</h3>
      <p className="text-lg">
        We follow a globally recognized curriculum that prepares our students for success in an interconnected world.
      </p>
    </div>

    <div className="p-6 bg-[#964734] text-white shadow-lg rounded-lg">
      <img
        src={classroomImage}
        alt="Technology Learning"
        className="w-full h-40 object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      />
      <h3 className="text-2xl font-bold mb-4 text-yellow-300">Technology-Driven Learning</h3>
      <p className="text-lg">
        With interactive whiteboards, tablets, and online resources, we bring cutting-edge technology into the classroom.
      </p>
    </div>
  </div>
</section>

      



 <section className=" py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center animate__animated animate__fadeIn animate__delay-0.5s">
          <h2 className="text-3xl font-extrabold text-yellow-300 mb-8 text-shadow-lg">
            Our Curriculum and Activities
          </h2>
          <p className="text-xl text-blue-600 mb-8">
            Explore how we prepare students for a bright future through a holistic approach to learning.
          </p>
        </div>

        {/* Grid Layout for Curriculum Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Comprehensive Curriculum */}
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-8 shadow-lg rounded-lg text-center transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-3xl font-semibold text-white mb-4">
              <span className="text-yellow-300">Comprehensive</span> Curriculum
            </h3>
            <p className="text-lg text-white">
              Our curriculum is designed to meet global educational standards while nurturing creativity, critical thinking, and problem-solving abilities. We offer a range of subjects that include Mathematics, Science, Social Studies, Languages, and the Arts, all taught using interactive, hands-on methods.
            </p>
          </div>

          {/* Extracurricular Activities */}
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-8 shadow-lg rounded-lg text-center transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1.2s">
            <h3 className="text-3xl font-semibold text-white mb-4">
              <span className="text-orange-300">Extracurricular</span> Activities
            </h3>
            <p className="text-lg text-white">
              We offer a wide variety of extracurricular activities that complement our academic programs. From sports teams and cultural clubs to leadership programs, students have opportunities to explore their interests, develop new skills, and build lasting friendships.
            </p>
          </div>

          {/* Character and Values */}
          <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-8 shadow-lg rounded-lg text-center transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1.4s">
            <h3 className="text-3xl font-semibold text-white mb-4">
              <span className="text-yellow-200">Character</span> and Values
            </h3>
            <p className="text-lg text-white">
              We focus on character development alongside academic learning. Our students are encouraged to grow into responsible, respectful, and empathetic individuals. We emphasize the values of integrity, respect, and responsibility throughout all school activities.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 animate__animated animate__fadeIn animate__delay-1.6s">
          <h2 className="text-3xl font-extrabold text-center text-yellow-300 mb-8">
            Our Learning in Action
          </h2>
          <p className="text-center text-xl text-blue-600 mb-12">
            Watch how our students engage in various learning activities and events that shape their future.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1s">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1.2s">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY" // Replace with your video URL
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1.4s">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/abc123xyz" // Replace with your video URL
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

      

 {/* Vision and Mission Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-extrabold text-center text-yellow-300 mb-8 animate__animated animate__fadeIn animate__delay-0.5s">
      Our Vision & Mission
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
      
      {/* Vision */}
      <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-700 text-white shadow-xl rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Our Vision</h3>
        <p className="text-lg">
          Our vision is to create a world-class educational institution where every student is empowered to thrive in a dynamic, interconnected world. We aim to nurture creativity, encourage innovation, instill strong values, and foster leadership in our students, preparing them to meet global challenges and shape a brighter future.
        </p>
      </div>
      
      {/* Mission */}
      <div className="p-6 bg-gradient-to-r from-teal-500 via-green-600 to-emerald-700 text-white shadow-xl rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Our Mission</h3>
        <p className="text-lg">
          Our mission is to provide each student with a well-rounded education that goes beyond academics. We strive to equip them with critical thinking skills, emotional intelligence, and a strong moral foundation. By fostering a supportive learning environment, we empower students to pursue their passions, embrace challenges, and lead with integrity in their personal and professional lives.
        </p>
      </div>
      
    </div>
  </div>
</section>


    {/* Testimonials Section */}
<section className="container mx-auto py-16">
  <h2 className="text-3xl font-extrabold text-center text-yellow-300 mb-12 animate__animated animate__fadeIn animate__delay-0.5s">
    What Parents Say About Rahul Public School
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Testimonial 1 */}
    <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-0.6s">
      <p className="italic">
        "Rahul Public School has been a fantastic place for my child's education. The faculty is exceptional! The teachers are always approachable, and they genuinely care about each student's progress."
      </p>
      <div className="flex items-center justify-end mt-4">
        {/* Star Rating */}
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
      </div>
      <h4 className="text-right mt-4 font-bold">- Mr. Sharma</h4>
    </div>

    {/* Testimonial 2 */}
    <div className="p-6 bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-0.8s">
      <p className="italic">
        "The modern facilities and supportive environment at Rahul Public School have made learning a joyful experience for my child. The classrooms are well-equipped, and my child looks forward to going to school every day!"
      </p>
      <div className="flex items-center justify-end mt-4">
        {/* Star Rating */}
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
      </div>
      <h4 className="text-right mt-4 font-bold">- Mrs. Verma</h4>
    </div>

    {/* Testimonial 3 */}
    <div className="p-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1s">
      <p className="italic">
        "A truly excellent school that focuses on both academics and overall development. The extracurricular activities are diverse and provide students with opportunities to grow beyond the classroom."
      </p>
      <div className="flex items-center justify-end mt-4">
        {/* Star Rating */}
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
      </div>
      <h4 className="text-right mt-4 font-bold">- Mr. Kumar</h4>
    </div>

    {/* Testimonial 4 */}
    <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1.2s">
      <p className="italic">
        "Rahul Public School has created an environment where my child's academic, emotional, and social needs are met. The school has exceeded our expectations in every way!"
      </p>
      <div className="flex items-center justify-end mt-4">
        {/* Star Rating */}
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
      </div>
      <h4 className="text-right mt-4 font-bold">- Mrs. Kapoor</h4>
    </div>

    {/* Testimonial 5 */}
    <div className="p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1.4s">
      <p className="italic">
        "The personalized attention and guidance given to my child by the teachers at Rahul Public School have been remarkable. My child has flourished academically and personally."
      </p>
      <div className="flex items-center justify-end mt-4">
        {/* Star Rating */}
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
      </div>
      <h4 className="text-right mt-4 font-bold">- Mr. Gupta</h4>
    </div>

    {/* Testimonial 6 */}
    <div className="p-6 bg-gradient-to-r from-yellow-500 to-red-500 text-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1.6s">
      <p className="italic">
        "I'm thrilled with the nurturing and holistic approach Rahul Public School has towards education. It's not just about academics; my child is learning life skills that will last forever."
      </p>
      <div className="flex items-center justify-end mt-4">
        {/* Star Rating */}
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
      </div>
      <h4 className="text-right mt-4 font-bold">- Mrs. Singh</h4>
    </div>

  </div>
</section>

    </div>
  );
};

export default Home;
