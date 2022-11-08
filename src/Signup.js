import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom'; 

import JoblyApi from './api';
import './Signup.css'; 

const Signup = ({ signup }) => {
    const history = useHistory();
    const INITIALSTATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }
    const [formData, setFormData] = useState(INITIALSTATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = signup(formData);
        
        setFormData(INITIALSTATE);

        history.push(`/companies`);
    }
    return (
        <form className='Signup-form' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' id='username' value={formData.username} onChange={handleChange} />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' value={formData.password} onChange={handleChange} />
            <label htmlFor='first_name'>First Name</label>
            <input type='text' name='firstName' id='first_name' value={formData.firstName} onChange={handleChange} />
            <label htmlFor='last_name'>Last Name</label>
            <input type='text' name='lastName' id='last_name' value={formData.lastName} onChange={handleChange} />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' value={formData.email} onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default Signup; 