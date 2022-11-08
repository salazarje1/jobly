import React, { useState, useEffect } from 'react'; 

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        let value = window.localStorage.getItem(key) || defaultValue;
        return value;
    })

    useEffect(() => {
        if(state === null) {
            window.localStorage.removeItem(key);
        } else {
            window.localStorage.setItem(key, state);
        }
    }, [key, state]);

    return [state, setState];
}

export default useLocalStorage; 