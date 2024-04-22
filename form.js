import React, { useState } from 'react';
import axios from 'axios';
import "./form.css";
function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/save', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <div className='form-container'>
      <h2 className='label'>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input className='input-field' type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <br />
        <input className='input-field' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <br />
        <input className='input-field' type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
        <br />
        <input className='input-field' type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <br />
        <button className='submit-btn' type="submit">Save</button>
      </form>
    </div>
  );
}

export default UserForm;
