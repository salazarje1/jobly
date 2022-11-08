import React, { useState, useEffect, useContext } from 'react'; 
import { Redirect, useParams } from 'react-router-dom'; 
import CompanyJob from './CompanyJob';
import JoblyApi from './api';
import UserContext from './context/UserContext';


const Company = () => {
    const { currUser } = useContext(UserContext);
    const { handle } = useParams();
    
    const [company, setCompany] = useState({jobs: []});
    useEffect(() => {
        async function getData() {
            try { 
                let res = await JoblyApi.getCompany(handle)
                setCompany(res); 
            } catch(err) {
                console.log(err);
                setCompany(null);
            }
        }
        getData();
    }, []);

    return (company && currUser) ? (
        <div>
            <img src={company.logoUrl} />
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            <div>
                <span><b>Number Of Employees: </b></span>
                <span>{company.numEmployees}</span>
            </div>
            {company.jobs.map((job) => {
                return <CompanyJob key={job.id} job={job} />
            })}
        </div>
    ) : <Redirect to="/companies" />
}


export default Company; 