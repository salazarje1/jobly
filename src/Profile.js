import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from './context/UserContext';
import JoblyApi from './api';
import './Signup.css';


const Profile = ({ setCurrUser }) => {
    const history = useHistory();
    const { currUser } = useContext(UserContext);
    const INITIALSTATE = {
        firstName: currUser.user.firstName,
        lastName: currUser.user.lastName,
        email: currUser.user.email
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

        const res = await JoblyApi.updateUser(formData, currUser.user.username);
        setCurrUser(res);

        setFormData(INITIALSTATE);

        history.push(`/`);
    }

    return (
        <div>
            <h1>My Profile</h1>
            <form className='Signup-form' onSubmit={handleSubmit}>
                <h3 className='Signup-form-user'>Username: {currUser.user.username}</h3>
                <label htmlFor='first_name'>First Name</label>
                <input type='text' name='firstName' id='first_name' value={formData.firstName} onChange={handleChange} />
                <label htmlFor='last_name'>Last Name</label>
                <input type='text' name='lastName' id='last_name' value={formData.lastName} onChange={handleChange} />
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' value={formData.email} onChange={handleChange} />
                <button>Edit</button>
            </form>
        </div>
    )
}

export default Profile;