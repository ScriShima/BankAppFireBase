import React, {useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  snapshotEqual,
} from 'firebase/firestore';

const auth = getAuth();

export function useAuth() {
  const [user, setUser] = React.useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
    setUser,
  };
}

export const useAuthTest = () => {
  return {
    user: {
      _id: 'ewqeqewqeq',
      name: 'Guest',
      avatar: 'https://redmed.ge/assets/photos/avatar-3.png',
    },
  };
};
