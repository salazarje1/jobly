import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './CompaniesDisplay.css'; 

const CompaniesDisplay = ({ company }) => {
    return (
        <Link to={`/companies/${company.handle}`} className='CompaniesDisplay'>
            <p className='CompaniesDisplay-title'>{company.name}</p>
            <img className='CompaniesDisplay-img' src={company.logoUrl} />
        </Link>
    )
}

export default CompaniesDisplay; 