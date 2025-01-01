// src/components/Profile/Profile.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from '../../axios';  // Assuming this is set up to make API requests
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();  // Get user info from context
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);     // Track error state
  const navigate = useNavigate();

  // Fetch user profile if `user` exists
  useEffect(() => {
    if (user) {
      setLoading(true);  // Start loading state
      axios.get('/profile') // Assuming you have an endpoint to fetch user profile
        .then((response) => {
          setProfile(response.data); // Set profile data
          setLoading(false); // End loading state
        })
        .catch((err) => {
          setError('Failed to fetch profile data'); // Handle errors
          setLoading(false); // End loading state
        });
    } else {
      navigate('/login'); // Redirect to login if no user
    }
  }, [user, navigate]);

  // Conditionally render based on loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Your Profile</h2>
      {profile ? (
        <>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phoneNumber}</p>
          <p>Address: {profile.address}</p>
          <p>DOB: {profile.dateOfBirth}</p>
          <button onClick={() => navigate('/edit-profile')}>Edit Profile</button>
        </>
      ) : (
        <p>No profile data available</p>
      )}
    </div>
  );
};

export default Profile;
