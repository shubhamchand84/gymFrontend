import React, { useRef, useState } from 'react';
import './Join.css';

const Join = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Basic',
    cardio: 'yes',
    age: '',
    weight: '',
    height: '',
    gender: '',  // Added gender field
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('https://gymbackend-6hqc.onrender.com/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Successfully joined!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          plan: 'Basic',
          cardio: 'yes',
          age: '',
          weight: '',
          height: '',
          gender: '',  // Reset gender field
        }); // Reset form
      } else {
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="Join" id="join-us">
      <form ref={form} className="join-form" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* Plan */}
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          required
        >
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
        </select>

        {/* Cardio Preference */}
        <div>
          <label>
            <input
              type="radio"
              name="cardio"
              value="yes"
              checked={formData.cardio === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="cardio"
              value="no"
              checked={formData.cardio === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        {/* Gender */}
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        {/* Weight */}
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        {/* Height */}
        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button type="submit" className="btn btn-join">
          Join Now
        </button>
      </form>
    </div>
  );
};

export default Join;
