import React, { useState, useRef, useEffect } from "react";
import { saveAs } from "file-saver";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Admission = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");  // For displaying errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    age: "",  // Added age field to form data
  });

  const handleApplyNowClick = () => {
    window.scrollTo(0, 0); // Scroll to top of the page
    setIsFormVisible(true); // Open the modal
  };
  const [phoneError, setPhoneError] = useState("");
  
  

  // Create a reference to the first input field in the form
  const formRef = useRef(null);
 

  

  const steps = [
    { title: "Fill the Application Form 📝", description: "Download the form from our website or collect it from the school office.", color: "bg-red-500" },
    { title: "Submit Documents 📄", description: "Submit required documents like birth certificate, previous report cards, and ID proof.", color: "bg-green-500" },
    { title: "Entrance Test 🧑‍🏫", description: "Appear for a simple entrance test based on your grade level.", color: "bg-blue-500" },
    { title: "Parent-Teacher Interaction 👩‍👦", description: "Meet with our teachers to understand our approach to learning.", color: "bg-purple-500" },
    { title: "Confirmation 🎉", description: "Pay the fees and secure your admission.", color: "bg-pink-500" },
    { title: "Orientation Day 🎈", description: "Participate in a fun orientation to kickstart your journey.", color: "bg-yellow-500" },
  ];

  const dates = [
    { label: "Application Start:", value: "January 1, 2024", icon: "📅", color: "bg-indigo-500" },
    { label: "Application Deadline:", value: "March 31, 2024", icon: "⏳", color: "bg-teal-500" },
    { label: "Entrance Test:", value: "April 15, 2024", icon: "📝", color: "bg-orange-500" },
    { label: "Admission Confirmation:", value: "April 30, 2024", icon: "✔️", color: "bg-lime-500" },
    { label: "Orientation Day:", value: "May 10, 2024", icon: "🎈", color: "bg-cyan-500" },
    { label: "Session Start:", value: "June 1, 2024", icon: "🏫", color: "bg-rose-500" },
  ];

  // Data for Pie Chart
  const studentData = {
    labels: ['Nursery', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'],
    datasets: [
      {
        label: 'Number of Students',
        data: [100, 120, 150, 130, 110, 115, 140, 125, 135, 145, 160, 155, 170], // sample data
        backgroundColor: ['#FF5733', '#FFBD33', '#FF9F33', '#FFD633', '#33FF57', '#33FFBD', '#33FF9F', '#3357FF', '#5733FF', '#9F33FF', '#BD33FF', '#FF33BD', '#FF5733'],
        borderColor: ['#FF5733', '#FFBD33', '#FF9F33', '#FFD633', '#33FF57', '#33FFBD', '#33FF9F', '#3357FF', '#5733FF', '#9F33FF', '#BD33FF', '#FF33BD', '#FF5733'],
        borderWidth: 1,
      },
    ],
  };



    
  const handleCardClick = (index) => {
    setClickedCard(index === clickedCard ? null : index);
  };

  // Download Function
  const downloadFile = (type) => {
    const fileContent =
      type === "fee"
        ? `Class,Fee,Description
Nursery,15000,First Level for kids
LKG,16000,Second Level for kids
UKG,17000,Pre-School
1st,18000,First Grade
2nd,18000,Second Grade
3rd,20000,Third Grade
4th,22000,Fourth Grade
5th,22000,Fifth Grade
6th,25000,Sixth Grade
7th,25000,Seventh Grade
8th,28000,Eighth Grade
9th,30000,Ninth Grade
10th,32000,Tenth Grade`
        : `Class,Teacher
Nursery,Ms. A
LKG,Ms. B
UKG,Ms. C
1st,Ms. D
2nd,Ms. E
3rd,Ms. F
4th,Ms. G
5th,Ms. H
6th,Ms. I
7th,Ms. J
8th,Ms. K
9th,Ms. L
10th,Ms. M`;

    const blob = new Blob([fileContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, `${type}-structure.csv`);
  };

  // // Apply Now Form submission functionality
  // const handleApplyNow = () => {
  //   setIsFormVisible(true); // Show the form when "Apply Now" is clicked
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;  // Regex to validate 10-digit phone number
  
    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
  
    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
  
    // Validate Class
    if (!formData.class) {
      newErrors.class = "Class is required.";
    }
  
    // Validate Age
    if (!formData.age) {
      newErrors.age = "Age is required.";
    } else if (formData.age <= 0) {
      newErrors.age = "Age must be a positive number.";
    }
  
    setErrors(newErrors); // Update the errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
  

  // Check if phone number exists in the database
  const checkPhoneExists = async (phone) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/check-phone/${phone}`);
      if (response.status === 200) {
        setPhoneError(""); // Clear the error if phone is available
        return true;
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setPhoneError(error.response?.data?.message || "Phone number is already registered.");
      }
      return false;
    }
  };

   // Handle form submission
   const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    const phoneExists = await checkPhoneExists(formData.phone);
    if (!phoneExists) return; // If phone number exists, don't proceed

    try {
      const response = await axios.post('http://localhost:5000/api/submit-application', formData);
      // alert(response.data); // Success message from the backend
      setIsFormVisible(false); // Close the modal
      setFormData({ name: "", phone: "", class: "", age: "" }); // Clear form data
    } catch (error) {
      alert("Error submitting application: " + error.response?.data || error.message);
    }
  };
  
  

  useEffect(() => {
    if (isFormVisible) {
      formRef.current?.focus(); // Focus the first input field when form becomes visible
    }
  }, [isFormVisible]);

  return (
    <section className="bg-white text-white py-16">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl mt-20 font-bold text-yellow-300 mb-6 text-center animate__animated animate__fadeIn">
          Admissions <span role="img" aria-label="graduation-cap">🎓</span>
        </h2>
        <p className="text-lg text-blue-600 mb-12 text-center animate__animated animate__fadeIn animate__delay-0.5s">
          Join Rahul Public School and embark on a journey of academic excellence and holistic development.
        </p>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4 text-center">
            Admission Process <span role="img" aria-label="clipboard">📝</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`p-6 ${step.color} rounded-lg shadow-lg text-center cursor-pointer transform transition-all duration-500 ${
                  clickedCard === index ? "scale-110 border-4 border-yellow-300" : "hover:scale-110"
                }`}
              >
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4 text-center">
            Important Dates <span role="img" aria-label="calendar">📅</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dates.map((date, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index + steps.length)}
                className={`p-6 ${date.color} rounded-lg shadow-lg text-center cursor-pointer transform transition-all duration-500 ${
                  clickedCard === index + steps.length
                    ? "scale-110 border-4 border-yellow-300"
                    : "hover:scale-110"
                }`}
              >
                <h4 className="text-lg font-bold text-white mb-2">{date.icon} {date.label}</h4>
                <p className="text-white">{date.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pie Chart for Number of Students */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-6">Number of Students in Each Class</h3>
          <div className="max-w-[400px] mx-auto">
            <Pie data={studentData} />
          </div>
        </div>

        {/* Fee and Teacher Structure */}
        <div className="mt-12 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Fee Structure</h3>
            <button
              onClick={() => downloadFile("fee")}
              className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full font-semibold hover:bg-yellow-500"
            >
              Download Fee Structure
            </button>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Teacher Structure</h3>
            <button
              onClick={() => downloadFile("teacher")}
              className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full font-semibold hover:bg-yellow-500"
            >
              Download Teacher Structure
            </button>
          </div>
          {/* Apply Now Button */}
        
         <div className="text-center mt-12 animate__animated animate__fadeInUp animate__delay-1.5s">
         <button
            onClick={handleApplyNowClick}  // Show modal
            className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full"
          >
            Apply Now <span role="img" aria-label="paper-plane">📄</span>
          </button>
        </div>
     {/* Modal for Apply Now Form */}
     {isFormVisible && (
       <div
       className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
       onClick={(e) => e.target === e.currentTarget && setIsFormVisible(false)}  // Close modal on outside click
     >
     <div className="bg-gray-800 p-8 rounded-lg w-full sm:w-96 md:w-112 max-w-lg mt-16"> {/* Adjust margin-top */}
     <h3 className="text-2xl font-semibold text-yellow-300 mb-6">Application Form</h3>

            

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400">Full Name</label>
                  <input
                    ref={formRef}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full max-w-sm px-4 py-2 rounded-md text-gray-900"
                    required
                  />
                </div>
                {/* <div>
                  <label className="block text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full max-w-sm px-4 py-2 rounded-md text-gray-900"
                    required
                  />
                </div> */}
     <div>
                  <label className="block text-gray-400">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md text-gray-900"
                    required
                  />
                  {phoneError && <p className="text-red-500 mt-2">{phoneError}</p>}
                </div>

                <div>
                  <label className="block text-gray-400">Class</label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full max-w-sm px-4 py-2 rounded-md text-gray-900"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full max-w-sm px-4 py-2 rounded-md text-gray-900"
                    required
                  />
                </div>
                  {/* Error Message */}
              {errorMessage && (
                <div className="bg-red-500 text-white p-2 rounded mb-4">{errorMessage}</div>
              )}
                <div>
                  <button
                    type="submit"
                    className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full font-semibold hover:bg-yellow-500"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default Admission;
