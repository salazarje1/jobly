import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import './App.css'; 

import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from './api';

import UserContext from './context/UserContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // const [token, setToken] = useState('');
  const [token, setToken] = useLocalStorage('token', null);
  const [currUser, setCurrUser] = useState(null);

  const addToken = async ({token}) => {
    setToken(token); 
  }

  useEffect(() => {
    async function getCurrUser() {
      if(token) {
        try {
          let { username } = jwt.decode(token); 
          JoblyApi.token = token;
          let currUser = await JoblyApi.getUser(username);
          setCurrUser(currUser);
        } catch(err) {
          console.error(err);
          setCurrUser(null);
        }
      }
    }

    getCurrUser();
  }, [token]); 

  const login = async (data) => {
    try {
      let token = await JoblyApi.login(data);
      addToken(token);
      return { success: true}
    } catch(err) {
      console.error(err);
      return err;
    }
  }

  const signup = async (data) => {
    try {
      let token = await JoblyApi.signupUser(data);
      addToken(token);
      return { success: true } 
    } catch(err) {
      console.error(err);
      return err; 
    }
  }

  const logout = () => {
    addToken({token: null})
    setCurrUser(null);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{currUser}}>
        <NavBar logout={logout} />
        <Routes login={login} signup={signup} setCurrUser={setCurrUser} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
