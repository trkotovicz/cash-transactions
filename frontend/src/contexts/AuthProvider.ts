export {}
// import PropTypes from 'prop-types';
// import { useEffect, useMemo, useState } from 'react';
// import IUser from '../interfaces/IUser';
// import { userToken, userRegister, userLogin } from '../services/apiRequests';
// import { saveUser, removeUser, getUser } from '../services/localStorage';
// import authContext from './AuthContext';

// const extractUserData = (user: IUser) => {
//   const { user: { id, username, accountId }, token } = user;
//   return { user: { id, username, accountId }, token }
// }

// const saveUserData = (userData: IUser, setState) => {
//   setState(userData);
//   saveUser(userData);
//   userToken(userData.token);
// };

// const removeUserData = (setState) => {
//   setState(null);
//   removeUser();
//   userToken('');
// };

// export default function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [logged, setLogged] = useState(true);

//   useEffect(() => {
//     const userFromLocalStorage = getUser() || null;

//     if (userFromLocalStorage) saveUserData(userFromLocalStorage, setUser);
//     setLogged(false);
//   }, []);

//   const login = async (email: string, password: string) => {
//     setLogged(true);
//     const response = await userLogin({ email, password });
//     if (response.error) return null;
//     const userData = extractUserData(response);
//     saveUserData(userData, setUser);
//     setLogged(false);
//     return userData;
//   };

//   const logout = () => {
//     removeUserData(setUser);
//   };

//   const register = async (userBody: object) => {
//     const response = await userRegister(userBody);
//     if (response.error) return null;
//     const userData = extractUserData(response);
//     saveUserData(userData, setUser);
//     return userData;
//   };

//   const contextValue = useMemo(() => ({
//     user,
//     logged,
//     login,
//     logout,
//     register,
//   }), [user, logged]);

//   return (
//     <authContext.Provider value={ contextValue }>
//       {children}
//     </authContext.Provider>
//   );
// }

// AuthProvider.propTypes = {
//   children: PropTypes.element.isRequired,
// };
