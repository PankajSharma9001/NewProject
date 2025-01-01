import React, { useState } from "react";
import axios from "axios"; // We'll use axios to send the form data to the server
import { FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // To handle form submission status
  const [error, setError] = useState(""); // To handle any errors
  const [loading, setLoading] = useState(false); // To handle loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setLoading(true); // Start loading

    axios
      .post("http://localhost:5000/api/contact", formData) // Send the form data to the server
      .then((response) => {
        console.log(response.data); // Success message in the console
        setIsSubmitted(true); // Update state to show success message
        setFormData({ name: "", email: "", message: "" }); // Reset form data
        setError(""); // Clear any error messages
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred. Please try again.");
      })
      .finally(() => setLoading(false)); // Stop loading after the process
  };

  return (
    <div className="container mx-auto py-10 bg-white text-blue-700 shadow-lg">
      <h2 className="text-4xl mt-20 font-extrabold text-yellow-300 text-center mb-6">
        Contact Us <span role="img" aria-label="phone">📞</span>
      </h2>

      {/* Introduction Text */}
      <div className="text-center mb-10">
        <p className="text-lg text-blue-600">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to get in touch with us.
          <br />
          <span className="text-yellow-300 font-semibold">Rahul Public School</span> is here to support your educational journey.
        </p>
      </div>

      {/* Error or Success Message */}
      {isSubmitted && (
        <div className="text-center text-green-500 mb-6">
          <p>Your message has been sent successfully! We'll get back to you soon. 🎉</p>
        </div>
      )}
      {error && (
        <div className="text-center text-red-500 mb-6">
          <p>{error}</p>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            rows="5"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <span>Sending...</span> // Show loading text
            ) : (
              <>
                Send Message <span role="img" aria-label="send">📤</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Contact Details Section */}
      <div className="mt-10 text-center text-blue-600">
        <p className="text-lg">If you prefer, you can also reach us directly through:</p>

        <div className="mt-4">
          {/* Phone Number */}
          <p className="text-yellow-300 font-semibold text-2xl">
            <span role="img" aria-label="phone">📞</span> +1 (234) 567-890
          </p>
        </div>

        <div className="mt-4">
          {/* Email */}
          <p className="text-yellow-300 font-semibold text-2xl">
            <span role="img" aria-label="email">📧</span> contact@rahulpublicschool.com
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-6">
          <p className="text-lg">Connect with us on social media:</p>

          <div className="flex justify-center space-x-6 mt-3">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" title="Facebook" rel="noopener noreferrer" className="text-yellow-300 text-3xl hover:text-yellow-600">
              <FaFacebookF />
            </a>

            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" title="Twitter" rel="noopener noreferrer" className="text-yellow-300 text-3xl hover:text-yellow-600">
              <FaTwitter />
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" title="YouTube" rel="noopener noreferrer" className="text-yellow-300 text-3xl hover:text-yellow-600">
              <FaYoutube />
            </a>

            {/* WhatsApp */}
            <a href="https://whatsapp.com" target="_blank" title="WhatsApp" rel="noopener noreferrer" className="text-yellow-300 text-3xl hover:text-yellow-600">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-lg">We look forward to connecting with you! 🌟</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
