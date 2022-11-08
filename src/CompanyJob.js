import React, { useContext, useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import JoblyApi from './api';
import UserContext from './context/UserContext';
import useApply from './hooks/useApply';
import './CompaniesDisplay.css'; 
import './CompanyJob.css';

const CompanyJob = ({ job }) => {
    const { currUser } = useContext(UserContext);
    const [jobIds, apply] = useApply(currUser);
    // const [jobIds, setJobIds] = useState([]);
    // const apply = async (e) => {
    //     try { 
    //         let username = currUser.user.username;
    //         let jobId = job.id;
    //         let res = await JoblyApi.userApplyForJob(username, jobId);

    //         e.target.innerText = 'Applied';
    //         e.target.style.backgroundColor = 'lightgrey';
            
    //         console.log(currUser);
    //     } catch(err) {
    //         console.error(err);
    //     }
    // }

    // useEffect(() => {
    //     async function getUserJobIds() {
    //         let res = await JoblyApi.getUser(currUser.user.username);
    //         setJobIds(res.user.applications);
    //     }
    //     getUserJobIds();
    // }, [])

    return (
        <div className='CompanyJob'>
            {job.companyName ? 
                <Link className="CompanyJob-link" to={`/companies/${job.companyHandle}`}>{job.companyName}</Link> :
                null
            }
            
            <div>
                <p className='CompanyJob-title'>{job.title}</p>
                <p className='CompanyJob-text'>Salary: {job.salary}</p>
                <p className='CompanyJob-text'>Equity: {job.equity}</p>
            </div>
            {jobIds.includes(job.id) ? 
            <button onClick={apply} id={job.id} className='CompanyJob-btn applied'>Applied</button>:
            <button onClick={apply} id={job.id} className='CompanyJob-btn'>Apply</button>
            }
        </div>
    )
}

export default CompanyJob; 