"use client";

import firebase from "firebase/app";
import "firebase/auth";
import { useEffect, useState } from "react";

export const useAuthState = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const appAuth = firebase.auth();

    const unsubscribe = appAuth.onAuthStateChanged(
      (user) => {
        setUser(user);
      },
      (error) => {
        console.error("useAuthState: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return user;
};
