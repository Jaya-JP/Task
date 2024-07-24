import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    email: ''
  });

  const Change = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formData.name) {
      valid = false;
      errors.name = 'Name is required';
    }

    if (!formData.age) {
      valid = false;
      errors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age < 1) {
      valid = false;
      errors.age = 'Please enter a valid age';
    }

    if (!formData.email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      errors.email = 'Email address is invalid';
    }

    setErrors(errors);
    return valid;
  };

  const Submit = (event) => {
    event.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log('Form Data:', formData);
      setFormData({
        name: '',
        age: '',
        email: ''
      });
    }
  };

  return (
    <form onSubmit={Submit}>
        {/* Name */}
      <div>
        <label>  Name   </label>
          <input  type="text" name="name"    value={formData.name} onChange={Change} />
        {errors.name && <p style={{ color:'blue' }}>{errors.name}</p>}
      </div>
        {/* Age */}
      <div>
        <label>Age </label>
          <input  type="number" name="age" value={formData.age} onChange={Change}/>
        {errors.age && <p style={{ color: 'blue' }}>{errors.age}</p>}
      </div>
        {/* Email */}
      <div>
        <label> Email: </label>
          <input type="email" name="email" value={formData.email}  onChange={Change}/>
          {errors.email && <p style={{ color: 'blue' }}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
