import React, { useState, useEffect, useContext } from 'react'; 
import { Redirect } from 'react-router-dom';
import JoblyApi from './api';
import CompanyJob from './CompanyJob';
import SearchForm from './SearchForm';
import UserContext from './context/UserContext';

import './Jobs.css';

const Jobs = () => {
    const { currUser } = useContext(UserContext);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        async function getData() {
            let res = await JoblyApi.getJobs();
            setJobs(res);
        }
        getData();
    }, []);
    
    const addJobs = (newJobs) => {
        setJobs(newJobs);
    }

    return currUser ? (
        <div className='Jobs'>
            <h1 className='Jobs-title'>Jobs</h1>
            <hr />
            <SearchForm addSearch={addJobs} search='jobs' />
            {jobs.map(job => {
                return <CompanyJob key={job.id} job={job} />
            })}
        </div>
    ) : <Redirect to="/" />
}

export default Jobs;