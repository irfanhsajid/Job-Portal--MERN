import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const UserContext = createContext({})

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null); //no user initially as if no one logged in
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    if (!user) {
      console.log('Fetching user data...');
      axios.get('/profile')
        .then(({ data }) => {
          console.log('User data retrieved:', data); //null
          setIsLoading(false)
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setIsLoading(false)
        });
    }
  }, [user]);


  console.log(user);

  // Function to log the user out
  const logout = async () => {
    try {
      await axios.post('/logout');
      // Clear the user data in the context or state immediately after logout
      setUser(null);
      toast.success("logout Successful!")
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}
