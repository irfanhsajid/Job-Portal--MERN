import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { deleteCookie } from '../utils/cookies';

export const UserContext = createContext({})

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {

  const [user, setUser] = useState(null); //no user initially as if no one logged in

  const [isLoading, setIsLoading] = useState(true); // Add isLoading state


  //get user data profile
  // const profileDataRetrive = async (token) => {
  //   console.log('Fetching user data...', token);
  //   await axios.get('/profile' + "?token=" + token)
  //     // await axios.get('/profile')
  //     .then((response) => {
  //       console.log('User data retrieved:', response.data);
  //       response.data && setUser(response.data);
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //       setIsLoading(false)
  //     });
  // }

  // useEffect(() => {
  //   if (!user) {
  //     const token = getCookie("token");
  //     if (token) {
  //       profileDataRetrive(token)
  //     }
  //     setUser(user);
  //   }
  // }, [user]);
  // console.log(user);


  // Fetch user profile data when the component mounts
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('/profile');
      const userProfile = response.data.user;
      setUser(userProfile);

    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };



  useEffect(() => {
    if (!user) {
      fetchUserProfile();
      setIsLoading(false)
    }
  }, [user])
  console.log(user)
  // Function to log the user out
  const logout = async () => {
    try {
      await axios.post('/logout');
      // Clear the user data in the context or state immediately after logout
      setUser(null);
      deleteCookie("token")
      toast.success("logout Successful!")
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }
  return (
    <UserContext.Provider value={{ user, setUser, logout, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  )

}
