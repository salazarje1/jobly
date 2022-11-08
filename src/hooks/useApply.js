import React, { useState, useEffect } from 'react'; 
import JoblyApi from '../api';

const userApply = (currUser, job) => {
    const [jobIds, setJobIds] = useState([]);

    const apply = async (e) => {
        try { 
            let username = currUser.user.username;
            let jobId = job.id;
            let res = await JoblyApi.userApplyForJob(username, jobId);

            e.target.innerText = 'Applied';
            e.target.style.backgroundColor = 'lightgrey';
            
            console.log(currUser);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        async function getUserJobIds() {
            let res = await JoblyApi.getUser(currUser.user.username);
            setJobIds(res.user.applications);
        }
        getUserJobIds();
    }, [])

    return [jobIds, apply];
}

export default userApply; 