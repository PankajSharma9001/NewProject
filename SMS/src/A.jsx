import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure this is imported
import { AuthProvider } from './context/AuthContext'; // Assuming you have a context
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';


function App() {
  return (
    <AuthProvider>
      {/* Add the future flag here */}
      <Router future={{ v7_relativeSplatPath: true }}>
        <Routes>
          {/* Add a default route for the homepage */}
          
          
          {/* Other routes */}
          <Route path="/register" element={<Register />} />  {/* Route for Register */}
          <Route path="/login" element={<Login />} />        {/* Route for Login */}
          <Route path="/profile" element={<Profile />} />    {/* Route for Profile */}
          <Route path="/edit-profile" element={<EditProfile />} /> {/* Route for EditProfile */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
