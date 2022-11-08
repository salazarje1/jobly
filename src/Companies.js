import React, { useContext, useEffect, useState } from 'react'; 
import { Redirect } from 'react-router-dom';
import CompaniesDisplay from './CompaniesDisplay';
import SearchForm from './SearchForm';
import UserContext from './context/UserContext';

import JoblyApi from './api'; 
import './Companies.css';


const Companies = () => {
    const { currUser } = useContext(UserContext);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getData() {
            let res = await JoblyApi.getCompanies();
            setCompanies(res);
        }
        getData();
    }, [])

    const addCompanies = (newCompanies) => {
        setCompanies(newCompanies);
    }
 
    return currUser ? (
        <div className='Companies'>
            <h1 className='Companies-title'>Companies</h1>
            <hr />
            <SearchForm addSearch={addCompanies} search='company' />

            {companies.map((company) => {
                return <CompaniesDisplay key={company.handle} company={company} />
            })}
        </div>
    ) : <Redirect to="/" />
}

export default Companies; 