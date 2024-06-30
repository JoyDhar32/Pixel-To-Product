import { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {}
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Guest' });
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

  useEffect(() => {
    // Store token in localStorage when it changes
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }, [token]);

  useEffect(() => {
    // Listen for page refresh/close event to clear token
    const handleBeforeUnload = () => {
      localStorage.removeItem('ACCESS_TOKEN');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const setToken = (token) => {
    _setToken(token);
  };

  return (
    <StateContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
