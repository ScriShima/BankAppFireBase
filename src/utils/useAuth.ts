import React from 'react';

export const useAuth = () => {
  return {
    user: {
      _id: 'ewqeqewqeq',
      name: 'Guest',
      avatar: 'https://redmed.ge/assets/photos/avatar-3.png',
    },
  };
};

// import {onAuthStateChanged} from 'firebase/auth';
// import {useEffect, useMemo, useState} from 'react';
// import {auth} from './firebase';

// export const useAuth = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const unSub = onAuthStateChanged(auth, user => {
//       if (user) {
//         setUser(user);
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//         setUser({});
//       }
//     });

//     return unSub();
//   });

//   const values = {
//     user,
//     isLoggedIn,
//   };

//   return useMemo(() => values, [values]);
// };
