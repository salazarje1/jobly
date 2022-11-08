import React, { useState } from 'react'; 
import JoblyApi from './api'; 
import './SearchForm.css';


const SearchForm = ({ addSearch, search }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    let res; 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(search === 'company'){
            res = await JoblyApi.getCompanies(searchTerm);
        } else {
            res = await JoblyApi.getJobs(searchTerm);
        }
        
        addSearch(res);

        setSearchTerm('');
    }
    return(
        <div>
            <form className='Companies-form' onSubmit={handleSubmit}>
                <input className='Companies-input' type='text' name="text" placeholder='Enter search' value={searchTerm} onChange={handleChange} />
                <button className='Companies-btn'>Search</button>
            </form>
        </div>
    )
}

export default SearchForm; 