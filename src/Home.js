import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom'; 
import UserContext from './context/UserContext';

import './Home.css'; 

const Home = () => {
    const { currUser } = useContext(UserContext);

    return (
        <div className='Home'>
            <h1 className='Home-title'>Joblyy</h1>
            <p className='Home-text'>Find Your Future</p>
            {currUser ? 
                null :
                <div>
                    <Link to="/signup" className='btn'>Sign Up</Link>
                    <Link to="/login" className='btn'>Login</Link>
                </div>
                
            }
        </div>
    )
}

export default Home; 